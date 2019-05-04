const ListPage = require('./list.po');
const EditPage = require('./edit.po');
const logging = require('protractor').logging;

describe('Tasks Actions', () => {

  let listPage;
  let editPage;

  async function createTask(name, date, notes) {
    await listPage.addTask();
    await editPage.setName(name);
    await editPage.setDate(date);
    await editPage.setNotes(notes);
    await editPage.create();
  }

  beforeEach(async () => {
    listPage = new ListPage();
    await listPage.navigateTo();
    editPage = new EditPage();
  });

  it('should create a task', async () => {
    await createTask('Test 1', '5/22/2019', 'Sample Note 1');

    const task = listPage.getTask('Test 1');
    expect(await task.getName()).toEqual('Test 1');
    expect(await task.getDate()).toEqual('May 22, 2019');
  });

  it('should edit a task', async () => {
    // creat task
    await createTask('Test 2', '5/23/2019', 'Sample Note 2');
    let task = listPage.getTask('Test 2');
    // edit task
    await task.editTask();
    expect(await editPage.getName()).toEqual('Test 2');
    expect(await editPage.getDate()).toEqual('5/23/2019');
    expect(await editPage.getNotes()).toEqual('Sample Note 2');
    // modify values
    await editPage.clearName();
    await editPage.setName('Modified Test 2');
    await editPage.clearDate();
    await editPage.setDate('6/25/2020');
    await editPage.clearNotes();
    await editPage.setNotes('Modified Sample Note 2');
    await editPage.save();
    // validate list change
    task = listPage.getTask('Modified Test 2');
    expect(await task.getName()).toEqual('Modified Test 2');
    expect(await task.getDate()).toEqual('Jun 25, 2020');
  });

  it('should delete a task', async () => {
    // creat task
    await createTask('Test 3', '5/24/2019', 'Sample Note 3');
    let task = listPage.getTask('Test 3');
    // delete task
    expect(await task.isPresent()).toBeTruthy();
    await task.deleteTask();
    expect(await task.isPresent()).toBeFalsy();
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
