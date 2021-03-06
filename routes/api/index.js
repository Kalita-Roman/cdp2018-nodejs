import { Router } from 'express';
import users from './users';
import products from './products';

const router = new Router();
router.use('/users', users);
router.use('/products', products);

export default router;

