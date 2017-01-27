import { Ref1Page } from './app.po';

describe('ref1 App', function() {
  let page: Ref1Page;

  beforeEach(() => {
    page = new Ref1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
