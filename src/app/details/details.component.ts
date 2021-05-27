import { ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { Content, ContentType, Link, MarkdownContent, Position, Positionable, TeaserContent } from '../posts/constants/content.interface';
import { Observable } from 'rxjs';
import { SMOOTH_ENTRANCE_2 } from '../shared/constants/animations-triggers';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
    SMOOTH_ENTRANCE_2({
      elements: '.full-row, .left-cell, .right-cell, .left-half, .right-half, .left-mid-cell, .right-mid-cell, .middle'
    })
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit {
  // @HostBinding('@pageAnimations')
  // public animatePage = 0;

  contentPath: string;
  cms$: Observable<[]>;
  pos = Position;

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

  of(content: Content, params: TemplateRef<any>[]) {
    switch (content.type) {
      case ContentType.HEADER: return params[2];
      case ContentType.MARKDOWN:
        const markdownContent = (content as MarkdownContent);
        markdownContent.position = markdownContent.position || Position.FULL;
        return params[0];
      case ContentType.TEASER:
        const teaserContent = (content as TeaserContent);
        teaserContent.position = teaserContent.position || Position.FULL;
        return params[1];
      case ContentType.CARD: return params[3];
    }
  }

  position(content: Positionable): Position {
    return content.position || Position.FULL;
  }
  isFull(content: Positionable): boolean {
    return this.position(content) === Position.FULL;
  }

  isLeft(content: Positionable): boolean {
    return this.position(content) === Position.LEFT;
  }
  isRight(content: Positionable): boolean {
    return this.position(content) === Position.RIGHT;
  }

  isHalf(content: Positionable): boolean {
    const pos = this.position(content);
    return pos === Position.RIGHT || pos === Position.LEFT;
  }
}
