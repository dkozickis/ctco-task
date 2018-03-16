import { AppPage } from './app.po';

describe('ctco-task App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should process remote JSON', () => {
    const url = 'http://gist.githubusercontent.com/dkozickis/57fd6032ce2c9c7fd7e728637727396d/' +
      'raw/61c488eb9ac1441419286ec3be4b1aaa0a9a742c/ctco-json-example.json';
    page.navigateTo();
    page.getUrlInput().sendKeys(url);
    page.getFirstButton().click();

    page.waitForElementByID('Opportunityname');

    expect(page.getValueByElementID('Opportunityname')).toBe('Acme - 1200 Widgets (Sample)');
  });
});
