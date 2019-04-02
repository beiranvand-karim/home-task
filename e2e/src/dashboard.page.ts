import {browser, by, element} from 'protractor';
import {HomePage} from './home.page';


export class DashboardPage {
  static async getPage() {
    await HomePage.getPage();
    await HomePage.signIn();

  }
  static getPageTitle() {
    return browser.getTitle() as Promise <string>;
  }

  static async addUser() {
    const name = element(by.css('.add-user-form input[placeholder="name"]'));
    await name.clear();
    await name.sendKeys('test');

    const submitButton = element(by.css('.add-user-form button'));
    await submitButton.click();

    await browser.waitForAngular();
    const rows = element.all(by.css('app-user-item > .table-body-row'));
    return rows.count();
  }
}
