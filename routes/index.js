import { Router } from 'express';
import auth from './auth';
import api from './api';

const router = new Router();
router.use('/auth', auth);
router.use('/api', api);

export default router;

