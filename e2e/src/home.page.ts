import {browser, by, element} from 'protractor';

export class HomePage {

  static async signIn() {
    const userName = element(by.css('.sign-in-form-container input[placeholder="userName"]'));
    await userName.clear();
    await userName.sendKeys('admin');

    const passWord = element(by.css('.sign-in-form-container input[placeholder="passWord"]'));
    await passWord.clear();
    await passWord.sendKeys('admin');

    const submitButton = element(by.tagName('button'));
    await submitButton.click();

    await browser.waitForAngular();
    return browser.getCurrentUrl() as Promise<any>;
  }

  static getPage() {
    return browser.get('/') as Promise<any>;
  }

  static getPageTitle() {
    return browser.getTitle() as Promise<string>;
  }
}
