import { ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import {
  Content,
  ContentType,
  Link,
  MarkdownContent,
  Position,
  Positionable,
  TeaserContent,
  UrlType
} from '../posts/constants/content.interface';
import { Observable } from 'rxjs';
import { SMOOTH_ENTRANCE_2 } from '../shared/constants/animations-triggers';
import { hasLink, isHidden, isReady, publishedOnly, textOf, urlOf } from '../shared/helpers/content.helper';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
    SMOOTH_ENTRANCE_2({
      elements: '.full-row, .left-cell, .right-cell, .left-half, .right-half, .left-mid-cell, .right-mid-cell, .middle, .force-left-half, .force-right-half, .force-left-cell, .force-right-cell'
    })
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit {
  contentPath: string;
  cms$: Observable<Content[]>;
  pos = Position;

  get contentUrl(): string {
    return `${env.assetsPath}${this.contentPath}`;
  }

  constructor(private http: HttpClient) {
    this.contentPath
      = window.location.search
      .replace('?filepath=', '');
    this.cms$
      = this.http
      .get<[]>(this.contentUrl)
      .pipe(map(this.toPublishedOnly()));
  }

  ngOnInit(): void {
  }

  onload(event) {
  }

  onerror(event) {
    console.error('on error:', event);
  }

  isReady(content: Content) {
    return isReady(content);
  }

  toPublishedOnly() {
    return publishedOnly();
  }

  markdownUrl(content: MarkdownContent) {
    return `${env.assetsPath}${content.url}`;
  }

  hasLink(link: Link[]) {
    return hasLink(link);
  }

  textOf(link: Link) {
    return textOf(link);
  }

  date(content: Content): string {
    return this.startDate(content) + (this.endDate(content) ? ' – ' + this.endDate(content) : '');
  }

  hasDate(content: Content): boolean {
    return !!this.startDate(content);
  }

  startDate(content: Content): string {
    return content['startDate'];
  }

  endDate(content: Content): string {
    return content['endDate'];
  }
  of(content: Content, templates: TemplateRef<any>[]) {
    switch (content.type) {
      case ContentType.HEADER: return templates[2];
      case ContentType.MARKDOWN: return templates[0];
      case ContentType.TEASER: return templates[1];
      case ContentType.SURVEY: return templates[3];
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

  imageUrlOf(link: Link) {
    return urlOf(link);
  }
}
