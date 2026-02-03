import { Document } from "@contentful/rich-text-types";

export type Sys = {
  id: string;
};

export type ImageAsset = {
  url: string;
  title?: string;
  description?: string;
  width?: number;
  height?: number;
};

export type CodeBlockEntry = {
  __typename: "CodeBlock";
  sys: Sys;
  title?: string;
  code: string;
};

export type ContentLinks = {
  assets: {
    block: ({
      sys: Sys;
    } & ImageAsset)[];
  };
  entries?: {
    block: CodeBlockEntry[];
  };
};

export type Content = {
  json: Document;
  links?: ContentLinks;
};

export type WritingCollectionItem = {
  title: string;
  slug: string;
  description: string;
  date: string;
};

export type WritingEntry = WritingCollectionItem & {
  content: Content;
};

export type WritingCollectionQuery = {
  writingCollection: {
    items: WritingCollectionItem[];
  };
};

export type WritingEntryQuery = {
  writingCollection: {
    items: WritingEntry[];
  };
};

export type ContentPage = {
  title: string;
  slug: string;
  date: string;
  content: Content;
};

export type ContentPageQuery = {
  contentPageCollection: {
    items: ContentPage[];
  };
};
