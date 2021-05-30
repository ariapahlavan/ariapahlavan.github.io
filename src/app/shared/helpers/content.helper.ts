import { Content, Link, UrlType } from '../../posts/constants/content.interface';
import { environment as env } from '../../../environments/environment';

export const urlOf = (link: Link) => {
  switch (link.type) {
    case UrlType.RELATIVE: return link.url;
    case UrlType.EXTERNAL: return link.url;
    case UrlType.ASSETS:
    default: return `${env.assetsPath}${link.url}`;
  }
};

export const hasLink = (links: Link[]) => links && links.length > 0;

export const textOf = (links: Link) => links.text;

export const isHidden = (content: Content): boolean => !!content.hidden;

export const isReady = (content: Content): boolean => !isHidden(content);

export const publishedOnly = () => (contentList: Content[]) => contentList.filter(isReady);

