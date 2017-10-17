import { browser, element, by } from 'protractor';

export class TiendaAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tienda-root h1')).getText();
  }
}
