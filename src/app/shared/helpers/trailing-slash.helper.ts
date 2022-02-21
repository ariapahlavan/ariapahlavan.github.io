// credit: https://stackoverflow.com/a/66536910/6042837
import { DefaultUrlSerializer, UrlTree } from '@angular/router';
import { InjectionToken } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export class TrailingSlashSerializer extends DefaultUrlSerializer {
  constructor(private platformId: InjectionToken<any>) {
    super();
  }

  serialize(tree: UrlTree): string {
    return this._withTrailingSlash(super.serialize(tree));
  }

  parse(url: string): UrlTree {
    if (isPlatformBrowser(this.platformId)) {
      return super.parse(this._withoutDot(url));
    } else {
      return super.parse(url);
    }
  }

  private _withoutDot(url: string): string {
    const splitOn = url.indexOf('?') > -1 ? '?' : '#';
    const pathArr = url.split(splitOn);

    if (pathArr[0].endsWith('/.')) {
      pathArr[0] = pathArr[0].slice(0, -2);
    } else if (pathArr[0].endsWith('.')) {
      pathArr[0] = pathArr[0].slice(0, -1);
    }

    return pathArr.join(splitOn);
  }

  private _withDot(url: string): string {
    if (url.split('/').pop().indexOf('.') === -1) {
      if (url.endsWith('/')) {
        url += '.';
      } else if (!url.endsWith('/') && !url.endsWith('.')) {
        url += '/.';
      }
    }
    return url;
  }

  private _withTrailingSlash(url: string): string {
    const splitOn = url.indexOf('?') > -1 ? '?' : '#';
    const pathArr = url.split(splitOn);

    if (!pathArr[0].endsWith('/')) {
      const fileName: string = url.substring(url.lastIndexOf('/') + 1);
      if (fileName.indexOf('.') === -1 || fileName.indexOf('?') > -1) {
        pathArr[0] += '/';
      }
    } else {
      pathArr[0] += '';
    }
    return pathArr.join(splitOn);
  }
}

export const urlSerializerFactory = (platformId: InjectionToken<any>) => {
  return new TrailingSlashSerializer(platformId);
};
