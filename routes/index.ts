import express from 'express';

import UserRoutes from './user';

const router = express.Router();

router.use('/user', UserRoutes);

export default router;
