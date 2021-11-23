describe('Exchange Rates - base is USD (US Dollars)', () => {
  it('should return the exchange rate for EUR (euro)', () => {
    const rate = 1.0;
    expect(rate).toEqual(0.87815);
  });
});
