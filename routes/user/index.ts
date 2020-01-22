import express from 'express';

import UserController from '../../controllers/user';

const router = express.Router();

router.post('/login', async (req, res) => {
  UserController.loginUser();
  res.status(200).send(true);
});

router.post('/signup', async (req, res) => {
  UserController.signupUser();
  res.status(200).send(true);
});

export default router;
