import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CardContent, Image, Link, UrlType } from '../../../posts/constants/content.interface';
import { Router } from '@angular/router';
import { environment as env } from '../../../../environments/environment';

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

  assetUrlOf(link: Link) {
    switch (link.type) {
      case UrlType.RELATIVE: return link.url;
      case UrlType.ASSETS: return `${env.assetsPath}${link.url}`;
      case UrlType.EXTERNAL: return link.url;
      default: return `${env.assetsPath}${link.url}`;
    }
  }

  urlOf(link: Link) {
    return link.url;
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
