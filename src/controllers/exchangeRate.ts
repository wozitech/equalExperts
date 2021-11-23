import express from 'express';
const router = express.Router();

router.get('/:from/:to', async (req, res) => {
  const { from, to } = req.params;
  // eslint-disable-next-line no-console
  console.log(`exchangeRates: from (${from})/to(s${to})`);
  return res.status(200).json({
    rate: 1.0,
  });
});

export default router;
