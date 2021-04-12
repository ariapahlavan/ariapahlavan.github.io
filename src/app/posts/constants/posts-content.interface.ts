export interface Content {
  id: string;
  type: 'markdown';
}


export interface MarkdownContent extends Content {
  url: string;
}

