import { browser, by, element, protractor } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getUrlInput() {
    return element(by.css('input#url'));
  }

  getFirstButton() {
    return element(by.css('button'));
  }

  getValueByElementID(id: string) {
    return element(by.id(id)).getAttribute('value');
  }

  waitForElementByID(id: string) {
    const waitingFor = element(by.id(id));
    const EC = protractor.ExpectedConditions;

    browser.wait(EC.presenceOf(waitingFor), 10000);
  }
}
