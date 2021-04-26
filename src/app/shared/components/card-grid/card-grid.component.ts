import { Component, Input, OnInit } from '@angular/core';
import { CardContent } from '../../../posts/constants/content.interface';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements OnInit {
  @Input() cardsContent: CardContent[];

  constructor() { }

  ngOnInit(): void {
  }

}
