const NAME_SELECT = 'input[placeholder="Name"]';
const DATE_SELECT = 'input[placeholder="Due Date"]';
const NOTES_SELECT = 'textarea[placeholder="Notes"]';

module.exports = class EditPage {

  // name
  clearName() {
    cy.get(NAME_SELECT).clear();
  }

  getName() {
    return cy.get(NAME_SELECT);
  }

  setName(name) {
    cy.get(NAME_SELECT).type(name).end();
  }

  // due date
  clearDate() {
    cy.get(DATE_SELECT).clear();
  }

  getDate() {
    return cy.get(DATE_SELECT);
  }

  setDate(date) {
    cy.get(DATE_SELECT).type(date);
  }

  // notes
  clearNotes() {
    cy.get(NOTES_SELECT).clear();
  }

  getNotes() {
    return cy.get(NOTES_SELECT);
  }

  setNotes(notes) {
    cy.get(NOTES_SELECT).type(notes);
  }

  // actions
  create() {
    cy.get('button').contains('Create Task').click();
  }

  save() {
    cy.get('button').contains('Save Task').click();
  }

};
