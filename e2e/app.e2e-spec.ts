import { AngularairTestingPage } from './app.po';

describe('angularair-testing App', function() {
  let page: AngularairTestingPage;

  beforeEach(() => {
    page = new AngularairTestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
