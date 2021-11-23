import App from '../src/server';
import supertest from 'supertest';
const request = supertest(App);

describe('challenge', () => {
  describe('general', () => {
    it('should return 404 (NOT FOUND) for unexpected endpoint', async () => {
      const res = await request.get('/doesnotexist');
      expect(res.status).toEqual(404);
    });
  });

  describe('Exchange Rate from euro to dollars', () => {
    it('should return 200', async () => {
      const res = await request.get('/exchangeRate/usd/eur');
      expect(res.status).toEqual(200);
    });
    it('should return exchange rate of 0.87815', async () => {
      const res = await request.get('/exchangeRate/usd/eur');
      expect(res.rate).toEqual(0.87815);
    });
  });

  describe('step2', () => {
    it('dummy test', () => {
      expect(1).toEqual(1);
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
