import express from 'express';
import { ExchangeRates } from '../services/exchangeRates';

const router = express.Router();

router.get('/:from/:to', async (req, res) => {
  const { from, to } = req.params;

  const exchange = new ExchangeRates();
  // eslint-disable-next-line no-console
  console.log(`exchangeRates: from (${from})/to(s${to})`);
  return res.status(200).json({
    rate: exchange.usdToEur,
  });
});

export default router;
