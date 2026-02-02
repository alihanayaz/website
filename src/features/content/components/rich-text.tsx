import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import {
  documentToReactComponents,
  type Options,
} from "@contentful/rich-text-react-renderer";
import { CodeBlock, type Content } from "@/features/content";
import { Heading, Hyperlink, Img, Text } from "@/components/ui";

function getOptions(links: Content["links"]): Options {
  const findAsset = (id: string) =>
    links?.assets.block.find((item) => item.sys.id === id);

  const findEntry = (id: string) =>
    links?.entries?.block.find((item) => item.sys.id === id);

  return {
    renderMark: {
      [MARKS.BOLD]: (text) => (
        <Text as="span" weight="medium">
          {text}
        </Text>
      ),
      [MARKS.ITALIC]: (text) => (
        <Text as="span" className="italic">
          {text}
        </Text>
      ),
      [MARKS.CODE]: (text) => (
        <Text
          as="code"
          size="sm"
          className="border-border bg-surface-hover rounded-md border px-2 py-0.5 font-mono"
        >
          {text}
        </Text>
      ),
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <Hyperlink href={node.data.uri || "#"}>{children}</Hyperlink>
      ),
      [BLOCKS.PARAGRAPH]: (_, children) => (
        <Text className="mb-6 last:mb-0">{children}</Text>
      ),
      [BLOCKS.HEADING_2]: (_, children) => (
        <Heading as="h2" size="md" className="mt-6 mb-2">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_3]: (_, children) => (
        <Heading as="h3" size="sm" className="mt-6 mb-2">
          {children}
        </Heading>
      ),
      [BLOCKS.OL_LIST]: (_, children) => (
        <ol className="mb-6 flex list-inside list-[decimal-leading-zero] flex-col gap-2">
          {children}
        </ol>
      ),
      [BLOCKS.UL_LIST]: (_, children) => (
        <ul className="mb-6 flex list-disc flex-col gap-1 pl-6">{children}</ul>
      ),
      [BLOCKS.LIST_ITEM]: (_, children) => <li>{children}</li>,
      [BLOCKS.HR]: () => <hr className="my-12" />,
      [BLOCKS.QUOTE]: (_, children) => (
        <blockquote className="border-border mb-6 border-l-2 pl-4">
          {children}
        </blockquote>
      ),
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const entry = findEntry(node.data.target.sys.id);

        switch (entry?.__typename) {
          case "CodeBlock": {
            return <CodeBlock title={entry.title} code={entry.code} />;
          }
          default:
            return null;
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = findAsset(node.data.target.sys.id);

        if (!asset) return null;

        return (
          <figure className="mb-6 flex flex-col gap-2 overflow-hidden">
            <Img
              src={asset.url}
              width={asset.width || 400}
              height={asset.height || 300}
              alt={asset.description || asset.title || "Image"}
              className="h-auto w-full"
            />
            {asset.description && (
              <Text
                as="figcaption"
                size="xs"
                tone="subtle"
                className="text-center break-all"
              >
                {asset.description}
              </Text>
            )}
          </figure>
        );
      },
    },
  };
}

export function RichText({ content }: { content: Content }) {
  if (!content) return null;

  return (
    <div>
      {documentToReactComponents(content.json, getOptions(content.links))}
    </div>
  );
}
