import { Heading } from "@/components/ui";
import { SITE_NAME } from "@/lib/constants";

export default function HomePage() {
  return <Heading as="h1">{SITE_NAME}</Heading>;
}
