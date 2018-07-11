import { Router } from 'express';
import { resolve } from 'path';
import auth from './auth';
import api from './api';
import { logUser } from 'middlewares/logger';

const router = new Router();
router.get('/', (req, res) => {
    res.sendFile('./index.html', {
        root: resolve(__dirname, '..')
    });
});
router.use('/auth', auth);
router.use(logUser);
router.use('/api', api);

export default router;

