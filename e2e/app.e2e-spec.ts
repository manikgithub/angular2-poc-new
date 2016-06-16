import { Angular2PocNewPage } from './app.po';

describe('angular2-poc-new App', function() {
  let page: Angular2PocNewPage;

  beforeEach(() => {
    page = new Angular2PocNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
