import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Content } from './constants/posts-content.interface';
import { environment as env } from '../../environments/environment';
import { CardContent, Link } from './constants/content.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  cms$ = this.http.get<Content[]>(this.contentUrl);
  experienceCms$ = this.http.get<CardContent[]>(this.experienceUrl);

  get contentUrl(): string {
    return `${env.assetsPath}${env.contentPath}`;
  }
  get experienceUrl(): string {
    return `${env.assetsPath}${env.experiencePath}`;
  }

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

  hasLink(links: Link[]) {
    return links && links.length > 0;
  }

  urlOf(links: Link) {
    return links.url;
  }

  textOf(links: Link) {
    return links.text;
  }

  clickHandler(s: string) {
    console.log('clicked:', s);
  }

}
