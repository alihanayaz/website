import { Fragment } from "react";
import { getWritingEntries } from "@/features/content/api/queries";
import { PageHeader } from "@/components/layout";
import { Card, Heading, Hyperlink, Icon, Text } from "@/components/ui";
import { formatDate } from "@/lib/utils";
import { ArrowRight, Calendar } from "lucide-react";
import { METADATA } from "@/lib/constants";

export default async function WritingPage() {
  const entries = await getWritingEntries();

  const isEmpty = !entries?.length;

  return (
    <>
      <PageHeader
        title={METADATA.writing.name}
        description={
          isEmpty ? "No writing entries found." : METADATA.writing.description
        }
        backHref={METADATA.root.path}
      />

      {!isEmpty && (
        <div className="md:border-surface-hover flex flex-col gap-4 md:gap-8 md:border-l md:pl-6">
          {entries.map((entry, i) => (
            <Fragment key={entry.slug}>
              <article className="md:grid md:grid-cols-4 md:items-baseline">
                <Card interactive asChild>
                  <Hyperlink
                    href={`${METADATA.writing.path}/${entry.slug}`}
                    variant="plain"
                    className="gap-4 md:col-span-3"
                  >
                    <Heading
                      id={entry.slug}
                      as="h2"
                      size="sm"
                      className="line-clamp-2"
                    >
                      {entry.title}
                    </Heading>

                    <Text
                      as="time"
                      size="sm"
                      tone="subtle"
                      dateTime={entry.date}
                      title={new Date(entry.date).toUTCString()}
                      className="order-first inline-flex items-center gap-1 md:col-span-1 md:hidden"
                    >
                      <Icon as={Calendar} size={16} />
                      {formatDate(entry.date)}
                    </Text>

                    <Text size="sm" className="line-clamp-2">
                      {entry.description}
                    </Text>

                    <Text
                      as="span"
                      size="sm"
                      tone="muted"
                      className="ml-auto inline-flex items-center gap-1"
                    >
                      Read article
                      <Icon
                        as={ArrowRight}
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Text>
                  </Hyperlink>
                </Card>

                <Text
                  as="time"
                  size="sm"
                  tone="subtle"
                  dateTime={entry.date}
                  title={new Date(entry.date).toUTCString()}
                  className="order-first hidden items-center gap-1 md:col-span-1 md:inline-flex"
                >
                  <Icon as={Calendar} size={16} />
                  {formatDate(entry.date)}
                </Text>
              </article>

              {i < entries.length - 1 && <hr className="block md:hidden" />}
            </Fragment>
          ))}
        </div>
      )}
    </>
  );
}
