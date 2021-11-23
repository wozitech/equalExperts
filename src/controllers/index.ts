import express from 'express';
import ExchangeRate from './exchangeRate';

const router = express.Router();
router.use('/exchangeRate', ExchangeRate);

export default router;
