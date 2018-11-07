import {AppPage} from './app.po';
import {by, element} from 'protractor';

describe('workspace-project App navigation', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to expenses', () => {
    page.navigateTo();
    element(by.partialLinkText('Expenses')).click();
    expect(element(by.tagName('p')).getText()).toEqual('todos-list works!');
  });

  it('should navigate to home', () => {
    page.navigateTo();
    element(by.partialLinkText('Home')).click();
    expect(element(by.tagName('p')).getText()).toEqual('home works!');
  });
});
