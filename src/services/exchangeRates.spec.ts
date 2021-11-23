import { ExchangeRates } from './exchangeRates';

describe('Exchange Rates - base is USD (US Dollars)', () => {
  let EXCHANGE = null;

  beforeAll(() => {
    EXCHANGE = new ExchangeRates();
  });

  it('should return the exchange rate for EUR (euro)', () => {
    expect(EXCHANGE.usdToEur).toEqual(0.87815);
  });
});
