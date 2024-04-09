import { REVALIDATE_TIME } from "@/_lib/constants";

export const revalidate = REVALIDATE_TIME;

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
