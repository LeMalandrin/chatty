import { ChattyPage } from './app.po';

describe('chatty App', () => {
  let page: ChattyPage;

  beforeEach(() => {
    page = new ChattyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
