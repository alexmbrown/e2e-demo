const { by } = require('protractor');

module.exports = class TaskPageObject {

  constructor(root) {
    this.root = root;
  }

  getName() {
    return this.root.element(by.css('strong')).getText();
  }

  getDate() {
    return this.root.element(by.css('.muted')).getText();
  }

  editTask() {
    return this.root.element(by.cssContainingText('mat-icon', 'edit')).click();
  }

  deleteTask() {
    return this.root.element(by.cssContainingText('mat-icon', 'delete')).click();
  }

  isPresent() {
    return this.root.isPresent();
  }

};
