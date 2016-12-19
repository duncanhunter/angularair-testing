import { browser, element, by } from 'protractor';

export class JokePage {
  static navigateTo() {
    return browser.get('/');
  }

  static getTitleText() {
    return element(by.css('h1')).getText();
  }
}
