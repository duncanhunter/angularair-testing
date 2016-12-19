
import { JokePage } from './chucknorris.po';
describe('angularair-testing App', function () {

  it('should display message saying app works', () => {
    JokePage.navigateTo();
    expect(JokePage.getTitleText()).toEqual('Chuck Norris Jokes');
  });
});
