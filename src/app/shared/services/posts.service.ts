import { Injectable } from '@angular/core';
import { Observable, race, ReplaySubject } from 'rxjs';
import { CardContent } from '../../posts/constants/content.interface';
import { environment as env } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { publishedOnly } from '../helpers/content.helper';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  jobs = new ReplaySubject<CardContent[]>(1);
  projects = new ReplaySubject<CardContent[]>(1);
  articles = new ReplaySubject<CardContent[]>(1);

  postSubjects;

  constructor(
    private http: HttpClient,
  ) {
    this.postSubjects = {
      [env.experienceKey]: this.jobs,
      [env.projectsKey]: this.projects,
      [env.articlesKey]: this.articles
    };
  }

  posts = (type): Observable<CardContent[]> => {
    console.log('retrieving posts of type:', type);
    return race(
      this.postSubjects[type].asObservable() as Observable<CardContent[]>,
      this.fetchPosts(type)
    );
  };

  private fetchPosts(type): Observable<CardContent[]> {
    return this.http.get<CardContent[]>(`${env.assetsPath}/${type}.json`)
      .pipe(
        map(publishedOnly()),
        map(x => x as CardContent[]),
        tap(x => {
          console.log(`Fetched fresh ${type}:`, x);
          this.postSubjects[type].next(x);
        })
      );
  }

}
