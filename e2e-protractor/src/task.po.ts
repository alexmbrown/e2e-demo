import { browser, by, element, ElementFinder } from 'protractor';

export class TaskPageObject {

  constructor(private root: ElementFinder) {}

  public getName(): Promise<string> {
    return this.root.element(by.css('strong')).getText() as Promise<string>;
  }

  public getDate(): Promise<string> {
    return this.root.element(by.css('.muted')).getText() as Promise<string>;
  }

  public editTask(): Promise<void> {
    return this.root.element(by.cssContainingText('mat-icon', 'edit')).click() as Promise<any>;
  }

  public deleteTask(): Promise<void> {
    return this.root.element(by.cssContainingText('mat-icon', 'delete')).click() as Promise<any>;
  }

}
