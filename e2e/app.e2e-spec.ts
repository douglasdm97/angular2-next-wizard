import { NgBootstrapTemplatePage } from './app.po';

describe('ng-bootstrap-template App', function() {
  let page: NgBootstrapTemplatePage;

  beforeEach(() => {
    page = new NgBootstrapTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
