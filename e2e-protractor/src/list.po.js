const { browser, by, element } = require('protractor');
const TaskPageObject = require('./task.po');

module.exports = class ListPage {

  navigateTo() {
    return browser.get(browser.baseUrl);
  }

  getTask(name) {
    return new TaskPageObject(element(by.cssContainingText('app-task', name)));
  }

  addTask() {
    return element(by.css('button[mat-fab]')).click();
  }

};
