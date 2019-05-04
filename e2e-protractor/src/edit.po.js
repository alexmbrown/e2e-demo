const { by, element } = require('protractor');

const NAME_SELECT = 'input[placeholder="Name"]';
const DATE_SELECT = 'input[placeholder="Due Date"]';
const NOTES_SELECT = 'textarea[placeholder="Notes"]';

module.exports = class EditPage {

  // name
  async clearName() {
    return element(by.css(NAME_SELECT)).clear();
  }

  async getName() {
    return element(by.css(NAME_SELECT)).getAttribute('value');
  }

  async setName(name) {
    return element(by.css(NAME_SELECT)).sendKeys(name);
  }

  // due date
  async clearDate() {
    const dateInput = element(by.css(DATE_SELECT));
    const dateValue = await this.getDate();
    await Promise.all([...dateValue].map(() => dateInput.sendKeys(protractor.Key.BACK_SPACE))) ;
    return dateInput.sendKeys(protractor.Key.DELETE);
  }

  async getDate() {
    return element(by.css(DATE_SELECT)).getAttribute('value');
  }

  async setDate(date) {
    return element(by.css(DATE_SELECT)).sendKeys(date);
  }

  // notes
  async clearNotes() {
    return element(by.css(NOTES_SELECT)).clear();
  }

  async getNotes() {
    return element(by.css(NOTES_SELECT)).getAttribute('value');
  }

  async setNotes(notes) {
    return element(by.css(NOTES_SELECT)).sendKeys(notes);
  }

  // actions
  create() {
    return element(by.cssContainingText('button', 'Create Task')).click();
  }

  save() {
    return element(by.cssContainingText('button', 'Save Task')).click();
  }

};
