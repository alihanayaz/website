type FetchConfig = Omit<RequestInit, "next" | "cache"> & {
  revalidate?: number | false;
  tags?: string[];
};

type GqlConfig = Omit<FetchConfig, "method" | "body"> & {
  query: string;
  variables?: Record<string, unknown>;
};

export async function fetcher<T>(
  url: string,
  config: FetchConfig = {},
): Promise<T | null> {
  const { headers, revalidate, tags, ...rest } = config;

  try {
    const res = await fetch(url, {
      method: "GET",
      cache: revalidate === 0 ? "no-store" : "force-cache",
      signal: AbortSignal.timeout(10000),
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      next: {
        revalidate: typeof revalidate === "number" ? revalidate : undefined,
        tags,
      },
      ...rest,
    });

    if (!res.ok || res.status === 204) {
      if (!res.ok) console.error(`Fetch failed: ${res.status} ${url}`);
      return null;
    }

    return (await res.json()) as T;
  } catch (error) {
    console.error(`Fetch error: ${url}`, error);
    return null;
  }
}

export async function fetchGql<T>(
  url: string,
  config: GqlConfig,
): Promise<T | null> {
  const { query, variables, ...rest } = config;

  const res = await fetcher<{ data: T; errors?: unknown[] }>(url, {
    method: "POST",
    body: JSON.stringify({ query, variables: variables ?? {} }),
    ...rest,
  });

  if (res?.errors) {
    console.error(`GraphQL error: ${url}`, res.errors);
    return null;
  }

  return res?.data ?? null;
}
