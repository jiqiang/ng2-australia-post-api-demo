import { Ng2AustraliaPostApiDemoPage } from './app.po';

describe('ng2-australia-post-api-demo App', () => {
  let page: Ng2AustraliaPostApiDemoPage;

  beforeEach(() => {
    page = new Ng2AustraliaPostApiDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
