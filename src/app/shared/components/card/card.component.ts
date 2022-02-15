import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CardContent, Link, UrlType } from '../../../posts/constants/content.interface';
import { Router } from '@angular/router';
import { environment as env } from '../../../../environments/environment';
import { urlOf } from '../../helpers/content.helper';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() content: CardContent;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  hasLink(links: Link[]) {
    return links && links.length > 0;
  }

  urlOf(link: Link) {
    return urlOf(link)
  }

  thumbUrlOf(link: Link) {
    return urlOf(link).replace('/images', '/images/thumb');
  }

  textOf(link: Link) {
    return link.text;
  }

  clickHandler(link: Link) {
    switch (link.type) {
      case UrlType.RELATIVE: this.router.navigateByUrl(link.url); break;
      case UrlType.ASSETS: break;
      case UrlType.EXTERNAL: window.open(link.url, '_blank'); break;
      default: this.router.navigateByUrl(link.url);
    }
  }
}
