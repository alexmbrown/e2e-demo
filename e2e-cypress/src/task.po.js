module.exports = class TaskPageObject {

  constructor(root) {
    this.root = root;
  }

  getName() {
    return cy.get('strong');
  }

  getDate() {
    return cy.get('.muted');
  }

  editTask() {
    cy.get('mat-icon').contains( 'edit').click();
  }

  deleteTask() {
    cy.get('mat-icon').contains( 'delete').click();
  }

  getRoot() {
    return this.root;
  }

};
