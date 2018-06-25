import { Router } from 'express';
import { auth } from 'middlewares/routes/auth';

export default new Router()
    .post('/', auth);
    