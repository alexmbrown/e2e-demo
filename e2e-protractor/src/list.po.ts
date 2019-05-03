import { browser, by, element } from 'protractor';
import { TaskPageObject } from './task.po';

export class ListPage {

  public navigateTo(): Promise<any> {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  public getTask(name: string): TaskPageObject {
    return new TaskPageObject(element(by.cssContainingText('app-task', name)));
  }

  public addTask(): Promise<void> {
    return element(by.css('button[mat-fab]')).click() as Promise<void>;
  }

}
