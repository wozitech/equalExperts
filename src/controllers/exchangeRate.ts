import express from 'express';
import { ExchangeRates } from '../services/exchangeRates';

const router = express.Router();

// const validateInput = (req, res, next) => {
// }

router.get('/:from/:to', async (req, res) => {
  const { from, to } = req.params;

  // validation should be encapsulated through express middleware!
  // should provide santised reason for eror; should expect reason in tests
  if (from !== 'usd') return res.status(400).send();
  if (!['gbp', 'eur'].includes(to)) return res.status(400).send();

  const exchange = new ExchangeRates();

  return res.status(200).json({
    rate: exchange.usdToEur,
  });
});

router.get('/:from/:to/:sourceValue', async (req, res) => {
  const { from, to, sourceValue } = req.params;

  // integration test missing tio prove validation on this endpoint!

  const exchange = new ExchangeRates();

  return res.status(200).json({
    rate: exchange.usdToEur,
    conversion: {
      source: {
        currency: 'usd',
        value: sourceValue,
      },
      target: {
        currency: 'gbp',
        value: exchange.convertUsdToGbp(sourceValue),
      },
    },
  });
});

export default router;
