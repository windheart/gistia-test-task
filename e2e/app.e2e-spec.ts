import { GistiaPage } from './app.po';

describe('gistia App', () => {
  let page: GistiaPage;

  beforeEach(() => {
    page = new GistiaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
