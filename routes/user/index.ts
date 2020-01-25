import express from 'express';
import _ from 'lodash';

import UserController from '../../controllers/user';
import { verifyToken } from '../../utils/auth';

const router = express.Router();

router.post('/login', async (req, res) => {
  const args = _.get(req, 'body');
  const { email, password } = args;
  if (!email || !password) {
    res.status(400).json('Missing params');
    return;
  }

  const result = await UserController.loginUser({
    email,
    password,
  });

  const { error, data } = result;

  if (error) {
    res.status(400).json(error);
    return;
  }

  res.status(200).send(data);
});


router.post('/signup', async (req, res) => {
  const args = _.get(req, 'body');
  const { email, password } = args;
  if (!email || !password) {
    res.status(400).json('Missing params');
    return;
  }

  const result = await UserController.signupUser({
    email,
    password,
  });

  const { error } = result;

  if (error) {
    res.status(400).json(error);
    return;
  }
  res.status(200).send(true);
});

router.post('/', verifyToken, async (req, res) => {
  const result = await UserController.user({
    userId: _.get(req, 'userId'),
  });
  const { error, data } = result;

  if (error) {
    res.status(400).json(error);
    return;
  }
  res.status(200).send(data);
});

router.post('/changepassword', verifyToken, async (req, res) => {
  const args = _.get(req, 'body');
  const { password, newPassword } = args;
  if (!password && !newPassword) {
    res.status(400).json('Missing params');
    return;
  }
  const result = await UserController.updatePassword({
    userId: _.get(req, 'userId'),
    password,
    newPassword,
  });
  const { error } = result;

  if (error) {
    res.status(400).json(error);
    return;
  }

  res.status(200).send(true);
});

export default router;
