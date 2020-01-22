import express from 'express';

const router = express.Router();

router.post('/login', async (req, res) => {
  console.log('login');
  res.status(200).send(true);
});

export default router;
