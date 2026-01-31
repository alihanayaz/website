import { Fragment } from "react";
import { getPublicCollections } from "@/features/bookmarks/api/queries";
import { PageHeader } from "@/components/layout";
import { Badge, Card, Heading, Hyperlink, Icon, Text } from "@/components/ui";
import { pluralize } from "@/lib/utils";
import { ArrowRight, Folder } from "lucide-react";
import { METADATA } from "@/lib/constants";

export default async function BookmarksPage() {
  const collections = await getPublicCollections();
  const isEmpty = !collections?.length;

  return (
    <>
      <PageHeader
        title={METADATA.bookmarks.name}
        description={
          isEmpty ? "No bookmarks found." : METADATA.bookmarks.description
        }
        backHref={METADATA.root.path}
        className="mb-2 sm:mb-4"
      />

      {!isEmpty && (
        <div className="mt-8 flex flex-col gap-4">
          {collections.map((col, i) => {
            return (
              <Fragment key={col.slug}>
                <Card interactive asChild>
                  <Hyperlink
                    href={`${METADATA.bookmarks.path}/${col.slug}`}
                    variant="plain"
                    className="gap-4"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <Badge icon={Folder} variant="outline">
                        Collection
                      </Badge>
                      <Icon
                        as={ArrowRight}
                        size={20}
                        className="-translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-2 pl-1">
                      <Heading
                        id={col.slug}
                        as="h2"
                        size="sm"
                        className="line-clamp-2"
                      >
                        {col.title}
                      </Heading>
                      {col.count && (
                        <Text as="span" size="sm" tone="muted">
                          {pluralize(col.count, "bookmark")}
                        </Text>
                      )}
                    </div>
                  </Hyperlink>
                </Card>

                {i < collections.length - 1 && <hr />}
              </Fragment>
            );
          })}
        </div>
      )}
    </>
  );
}
