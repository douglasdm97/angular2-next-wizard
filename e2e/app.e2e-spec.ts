import { Ng2BootstrapTemplatePage } from './app.po';

describe('ng2-bootstrap-template App', function() {
  let page: Ng2BootstrapTemplatePage;

  beforeEach(() => {
    page = new Ng2BootstrapTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
