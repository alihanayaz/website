import { highlight } from "sugar-high";
import { Text } from "@/components/ui";
import { CopyButton } from "@/components/shared";

interface CodeBlockProps {
  title?: string;
  code: string;
}

export const CodeBlock = ({ title, code }: CodeBlockProps) => {
  const codeHTML = highlight(code);

  return (
    <div className="border-border mb-6 rounded-md border last:mb-0">
      <div className="border-border bg-surface-hover flex flex-wrap items-center justify-between gap-2 rounded-t-md border-b px-4 py-2">
        {title && (
          <Text as="span" size="sm">
            {title}
          </Text>
        )}
        <CopyButton content={code} className="ml-auto" />
      </div>
      <div className="size-full overflow-x-auto overflow-y-hidden">
        <pre>
          <code dangerouslySetInnerHTML={{ __html: codeHTML }} />
        </pre>
      </div>
    </div>
  );
};
