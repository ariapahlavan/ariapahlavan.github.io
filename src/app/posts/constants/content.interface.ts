export enum ContentType {
  CARD = 'card',
  MARKDOWN = 'markdown'
}

export interface Content {
  id: string;
  type: ContentType;
}

export interface DescriptiveContent extends Content {
  title?: string;
  subTitle?: string;
}

export interface CardContent extends DescriptiveContent {
  type: ContentType.CARD;
  description?: string;
  actions?: Action[];
  images?: Image[];
  thumbnails?: Image[];
}

export interface MarkdownContent extends DescriptiveContent {
  type: ContentType.MARKDOWN;
  startDate?: string;
  endDate?: string;
  url: string;
}

export class Link {
  text: string;
  url: string;
}

export class Action extends Link {
}

export class Image extends Link {
}
