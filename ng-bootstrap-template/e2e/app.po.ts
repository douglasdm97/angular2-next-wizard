import { browser, element, by } from 'protractor';

export class NgBootstrapTemplatePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngbt-root h1')).getText();
  }
}
