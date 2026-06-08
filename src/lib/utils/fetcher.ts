type FetchConfig = Omit<RequestInit, "next" | "cache"> & {
  responseType?: "json" | "text";
  revalidate?: number | false;
  tags?: string[];
};

export type GqlConfig = Omit<FetchConfig, "method" | "body"> & {
  query: string;
  variables?: Record<string, unknown>;
};

const CONTENT_TYPES: Record<
  NonNullable<FetchConfig["responseType"]>,
  string
> = {
  json: "application/json",
  text: "text/xml",
};

export async function fetcher<T>(
  url: string,
  config: FetchConfig = {},
): Promise<T | null> {
  const { headers, responseType = "json", revalidate, tags, ...rest } = config;

  try {
    const res = await fetch(url, {
      method: "GET",
      cache: revalidate === 0 ? "no-store" : "force-cache",
      signal: AbortSignal.timeout(10000),
      headers: {
        "Content-Type": CONTENT_TYPES[responseType],
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

    return (await res[responseType]()) as T;
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
