import { ExchangeRates } from './exchangeRates';

describe('Exchange Rates - base is USD (US Dollars)', () => {
  let EXCHANGE = null;

  beforeAll(() => {
    EXCHANGE = new ExchangeRates();
  });

  it('should return the exchange rate for EUR (euro)', () => {
    expect(EXCHANGE.usdToEur).toEqual(0.87815);
  });

  it('should return the exchange rate for GBP (euro)', () => {
    expect(EXCHANGE.usdToGbp).toEqual(0.78569);
  });

  it('should return the value in pounds for given dollar', () => {
    expect(EXCHANGE.convertUsdToGbp(100)).toEqual('78.57');
  });
});
