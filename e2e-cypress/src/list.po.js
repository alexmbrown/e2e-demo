const TaskPageObject = require('./task.po');

module.exports = class ListPage {

  navigateTo() {
    cy.visit('/');
  }

  getTask(name) {
    return new TaskPageObject(cy.get('app-task').contains(name));
  }

  addTask() {
    cy.get('button[mat-fab]').click({force: true});
    cy.url().should('include', '/create')
  }

};
