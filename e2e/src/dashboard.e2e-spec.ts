import {DashboardPage} from './dashboard.page';

describe('dashboard should work fine', () => {

  beforeAll(async () => {
    await DashboardPage.getPage();
  });

  it('should have right title', async function () {
    const title = await DashboardPage.getPageTitle();
    expect(title).toContain('HomeTask');
  });

  it('should create a user', async function () {
    const count = await DashboardPage.addUser();
    expect(count).toBe(1);
  });
});
