import { Component, Input, OnInit } from '@angular/core';
import { CardContent, Link } from '../../../posts/constants/content.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() content: CardContent;

  constructor(private router: Router) { }

  ngOnInit(): void {
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

  clickHandler(path: string) {
    return this.router.navigateByUrl(path);
  }
}
