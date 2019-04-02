import {HomePage} from './home.page';

describe('home page should work fine', () => {
  beforeAll(async () => {
    await HomePage.getPage();
  });

  it('should have right title', () => {
    HomePage.getPageTitle()
      .then((title: string) => {
        expect(title).toEqual('HomeTask');
      });
  });

  it('should sign in', async function () {
    const currentUrl = await HomePage.loginInForm();
    expect(currentUrl).toContain('/dashBoard');
  });

});
