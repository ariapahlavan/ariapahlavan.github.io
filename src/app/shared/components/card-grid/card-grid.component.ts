import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { CardContent } from '../../../posts/constants/content.interface';
import { ENTRANCE_PARAMS, SMOOTH_ENTRANCE } from '../../constants/animations-triggers';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    SMOOTH_ENTRANCE({
      ...ENTRANCE_PARAMS,
    })
  ]
})
export class CardGridComponent implements OnInit {
  @Input() cardsContent: CardContent[];

  list: string[];

  constructor() {
  }

  ngOnInit(): void {
  }

  titles(cardsContent: CardContent[]) {
    return cardsContent.map(x => x.title);
  }
}
