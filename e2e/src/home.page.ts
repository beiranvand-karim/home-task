import {browser} from 'protractor';

export class HomePage {
  getPage() {
    return browser.get('/') as Promise<any>;
  }

  getPageTitle() {
    return browser.getTitle() as Promise<string>;
  }
}
