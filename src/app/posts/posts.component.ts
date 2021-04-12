import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Content, MarkdownContent } from './constants/posts-content.interface';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  cms$ = this.http.get<Content[]>(env.contentUrl);

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  trackPosts(index, post: Content) {
    return post.id;
  }

  onload(event) {
    // console.log('on load:', event);
  }

  onerror(event) {
    console.log('on error:', event);
  }

  urlOf(post: Content) {
    return (post as MarkdownContent).url;
  }
}
