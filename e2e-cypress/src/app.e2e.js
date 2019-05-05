const ListPage = require('./list.po');
const EditPage = require('./edit.po');

context('Task Actions', () => {

  let listPage;
  let editPage;

  function createTask(name, date, notes) {
    listPage.addTask();
    editPage.setName(name);
    editPage.setDate(date);
    editPage.setNotes(notes);
    editPage.create();
  }

  beforeEach(() => {
    listPage = new ListPage();
    listPage.navigateTo();
    editPage = new EditPage();
  })

  it('should create a task', async () => {
    createTask('Test 1', '5/22/2019', 'Sample Note 1');

    const task = listPage.getTask('Test 1');
    task.getName().should('contain', 'Test 1');
    task.getDate().should('contain', 'May 22, 2019');
  })

  it('should edit a task', () => {
    // creat task
    createTask('Test 2', '5/23/2019', 'Sample Note 2');
    let task = listPage.getTask('Test 2');
    // edit task
    task.editTask();
    editPage.getName().should('have.value', 'Test 2');
    editPage.getDate().should('have.value', '5/23/2019');
    editPage.getNotes().should('have.value', 'Sample Note 2');
    // modify values
    editPage.clearName();
    editPage.setName('Modified Test 2');
    editPage.clearDate();
    editPage.setDate('6/25/2020');
    editPage.clearNotes();
    editPage.setNotes('Modified Sample Note 2');
    editPage.save();
    // validate list change
    task = listPage.getTask('Modified Test 2');
    task.getName().should('contain', 'Modified Test 2');
    task.getDate().should('contain','Jun 25, 2020');
  })

  it('should delete a task', () => {
    // create task
    createTask('Test 3', '5/24/2019', 'Sample Note 3');
    let task = listPage.getTask('Test 3');
    // delete task
    task.getRoot().should('be.visible');
    task.deleteTask();
    cy.get('app-task').should('not.exist');
  })

})
