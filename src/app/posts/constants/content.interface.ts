export enum ContentType {
  CARD,
  MARKDOWN
}

export interface Content {
  id: string;
  type: ContentType;
}

export interface CardContent extends Content {
  type: ContentType.CARD;
  title?: string;
  subTitle?: string;
  description?: string;
  actions?: Action[];
  images?: Image[];
  thumbnails?: Image[];
}

export class Link {
  text: string;
  url: string;
}

export class Action extends Link {
}

export class Image extends Link {
}
