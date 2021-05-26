import { ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { Content, ContentType, Link, MarkdownContent } from '../posts/constants/content.interface';
import { Observable } from 'rxjs';
import { SMOOTH_ENTRANCE_2 } from '../shared/constants/animations-triggers';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
    SMOOTH_ENTRANCE_2({
      elements: '.full-row, .left-cell, .right-cell'
    })
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit {
  // @HostBinding('@pageAnimations')
  // public animatePage = 0;

  contentPath: string;
  cms$: Observable<[]>;

  get contentUrl(): string {
    return `${env.assetsPath}${this.contentPath}`;
  }

  constructor(private http: HttpClient) {
    this.contentPath = window.location.search.replace('?filepath=', '');
    this.cms$ = this.http.get<[]>(this.contentUrl);
  }

  ngOnInit(): void {
  }

  onload(event) {
  }

  onerror(event) {
    console.error('on error:', event);
  }

  isMarkdown(content: Content) {
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

  date(content: Content) {
    return content['startDate'] + (content['endDate'] ? ' – ' + content['endDate'] : '');
  }

  templateFor(content: Content, param: TemplateRef<any>[]) {
    switch (content.type) {
      case ContentType.MARKDOWN: return param[0];
      case ContentType.CARD: return param[1];
    }
  }
}
