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

export type ContentLinks = {
  assets: {
    block: ({
      sys: Sys;
    } & ImageAsset)[];
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
