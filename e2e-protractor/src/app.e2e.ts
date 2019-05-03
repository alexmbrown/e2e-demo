import { browser, logging } from 'protractor';
import { ListPage } from './list.po';
import { EditPage } from './edit.po';

describe('workspace-project App', () => {

  let listPage: ListPage;
  let editPage: EditPage;

  beforeEach(async () => {
    listPage = new ListPage();
    await listPage.navigateTo();
    editPage = new EditPage();
  });


  it('should create a task', async () => {
    await listPage.addTask();

    // fill out form
    // submit form
    // validate list
  });

  // it('should edit a task', () => {
  //   // click add
  //   // fill out form
  //   // submit form
  //   // validate list
  //
  //   // click edit
  //   // modify data
  //   // submit
  //
  //   // validate list change
  // });
  //
  // it('should delete a task', () => {
  //   // click add
  //   // fill out form
  //   // submit form
  //   // validate list
  //
  //   // click delete validate not in list
  //
  //   // validate list change
  // });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
