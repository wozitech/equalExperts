import App from '../src/server';
import supertest from 'supertest';
const request = supertest(App);

describe('challenge', () => {
  describe('general', () => {
    it('should return 404 (NOT FOUND) for unexpected endpoint', async () => {
      const res = await request.get('/doesnotexist');
      expect(res.status).toEqual(404);
    });
    it('should return 400 (BAD REQUEST) is source currency is not usd', async () => {
      const res = await request.get('/exchangeRate/abc/eur');
      expect(res.status).toEqual(400);
    });
    it('should return 400 (BAD REQUEST) is target currency is neither eur not gbp', async () => {
      const res = await request.get('/exchangeRate/usd/abc');
      expect(res.status).toEqual(400);
    });
  });

  describe('Exchange Rate from euro to dollars', () => {
    it('should return 200', async () => {
      const res = await request.get('/exchangeRate/usd/eur');
      expect(res.status).toEqual(200);
    });
    it('should return exchange rate of 0.87815', async () => {
      const res = await request.get('/exchangeRate/usd/eur');
      expect(res.body.rate).toEqual(0.87815);
    });
  });

  describe('Convert USD to pounds', () => {
    it('should return 200', async () => {
      const res = await request.get(`/exchangeRate/usd/gbp/1.65`);
      expect(res.status).toEqual(200);
    });

    it('should return value gbp for given value in usd', async () => {
      const dollarValue = 101.25;
      const gbpValue = dollarValue * 0.78569;
      const res = await request.get(`/exchangeRate/usd/gbp/${dollarValue}`);
      expect(res.body.rate).toEqual(0.87815);
      expect(res.body.conversion.source).toEqual({
        currency: 'usd',
        value: dollarValue,
      });
      expect(res.body.conversion.target).toEqual({
        currency: 'gbp',
        value: gbpValue,
      });
    });
  });

  describe('step3', () => {
    it('dummy test', () => {
      expect(1).toEqual(1);
    });
  });
  describe('step4', () => {
    it('dummy test', () => {
      expect(1).toEqual(1);
    });
  });
});
