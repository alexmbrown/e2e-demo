import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {

  constructor() { }

  public store(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public get<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key)) as T;
  }
}
