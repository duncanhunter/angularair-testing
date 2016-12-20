
import { JokePage } from './chucknorris.po';
describe('angularair-testing App', function () {

  it('should display a title of "Chuck Norris Jokes"', async() => {
    JokePage.navigateTo();
    expect(JokePage.getTitleText()).toEqual('Chuck Norris Jokes');
  });

  it(`should have a different joke after clicking "get joke" button`, async() => {
    JokePage.navigateTo();
    const firstJoke = JokePage.getParagraphText();

    JokePage.getNextQuote();

    const secondJoke =  await JokePage.getParagraphText();
    expect(firstJoke).not.toEqual(secondJoke);
  });
});
