import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
  }

  valueOf(key: string, defaultValue: any = null): any {
    const storedValue = this.storage.get(key);
    return storedValue === null || storedValue === undefined ? defaultValue : storedValue;
  }

  upsert(key: string, value: any): void {
    this.storage.set(key, value);
  }

  remove(key: string): void {
    this.storage.remove(key);
  }
}
