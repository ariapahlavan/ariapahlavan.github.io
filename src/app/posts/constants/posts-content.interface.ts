export interface Content {
  id: string;
  type: 'markdown';
}


export interface MarkdownContentLegacy extends Content {
  url: string;
}

