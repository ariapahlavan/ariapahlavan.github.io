export enum ContentType {
  HEADER = 'header',
  CARD = 'card',
  MARKDOWN = 'markdown',
  TEASER = 'teaser'
}

export enum UrlType {
  RELATIVE = 'RELATIVE',
  ASSETS = 'ASSETS',
  EXTERNAL = 'EXTERNAL'
}

export enum Position {
  FULL = 'full',
  LEFT = 'left',
  RIGHT = 'right'
}

export interface Content {
  id: string;
  type: ContentType;
}

export interface DescriptiveContent extends Content {
  title?: string;
  subTitle?: string;
}

export interface HeaderContent extends DescriptiveContent {
  type: ContentType.HEADER;
  startDate?: string;
  endDate?: string;
}

export interface CardContent extends DescriptiveContent {
  type: ContentType.CARD;
  description?: string;
  actions?: Action[];
  images?: Image[];
  thumbnails?: Image[];
}

export interface Positionable {
  position: Position;
}

export interface MarkdownContent extends Content, Positionable  {
  type: ContentType.MARKDOWN;
  url: string;
}

export interface TeaserContent extends Content, Positionable {
  type: ContentType.TEASER;
  images: Image[];
}

export class Link {
  text: string;
  url: string;
  type: UrlType = UrlType.ASSETS;
}

export class Action extends Link {
}

export class Image extends Link {
}
