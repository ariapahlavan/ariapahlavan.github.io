import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { CardContent } from './constants/content.interface';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { publishedOnly } from '../shared/helpers/content.helper';
import { PostsService } from '../shared/services/posts.service';

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
    private postsService: PostsService,
    private router: ActivatedRoute
  ) {
    this.experienceCms$ = postsService.posts(this.router.snapshot.data.key);
  }

  ngOnInit(): void {
  }
}
