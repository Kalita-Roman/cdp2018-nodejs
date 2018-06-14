import { Router } from 'express';
import { getUsers } from 'middlewares/routes/users';

export default new Router()
    .get('/', getUsers);
    