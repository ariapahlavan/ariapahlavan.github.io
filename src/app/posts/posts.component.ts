import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { CardContent } from './constants/content.interface';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { publishedOnly } from '../shared/helpers/content.helper';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit {
  experienceCms$: Observable<CardContent[]>;

  get contentUrl(): string {
    return `${env.assetsPath}${env.contentPath}`;
  }

  constructor(
    private http: HttpClient,
    private router: ActivatedRoute
  ) {
    this.experienceCms$
      = this.http
      .get<CardContent[]>(`${env.assetsPath}${router.snapshot.data.path}`)
      .pipe(map(this.toPublishedOnly()), map(x => x as CardContent[]));
  }

  ngOnInit(): void {
  }

  toPublishedOnly() {
    return publishedOnly();
  }
}
