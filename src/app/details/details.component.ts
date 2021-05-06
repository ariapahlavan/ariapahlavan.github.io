import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { Content, ContentType, Link, MarkdownContent } from '../posts/constants/content.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  contentPath: string;
  cms$: Observable<[]>;

  get contentUrl(): string {
    console.log('content url:', `${env.assetsPath}${this.contentPath}`);
    return `${env.assetsPath}${this.contentPath}`;
  }

  constructor(private http: HttpClient) {
    this.contentPath = window.location.search.replace('?filepath=', '');
    this.cms$ = this.http.get<[]>(this.contentUrl);
    this.cms$.subscribe(x => console.log(x));
  }

  ngOnInit(): void {
  }

  onload(event) {
    // console.log('on load:', event);
  }

  onerror(event) {
    console.log('on error:', event);
  }

  isMarkdown(content: Content) {
    console.log(`is [${content.type}] markdown:`, content.type === ContentType.MARKDOWN);
    return content.type === ContentType.MARKDOWN;
  }

  markdownUrl(content: MarkdownContent) {
    return `${env.assetsPath}${content.url}`;
  }

  hasLink(links: Link[]) {
    return links && links.length > 0;
  }

  urlOf(links: Link) {
    return links.url;
  }

  textOf(links: Link) {
    return links.text;
  }

  templateFor(content: Content, param: TemplateRef<any>[]) {
    switch (content.type) {
      case ContentType.MARKDOWN: return param[0];
      case ContentType.CARD: return param[1];
    }
  }
}
