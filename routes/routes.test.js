import request from 'utils/test/requestForTestedApp';

const { get, post } = request;

jest.mock('middlewares/routes/auth', () => {
    return {
        auth: jest.fn((req, res, next) => next()),
    };
});

jest.mock('middlewares/routes/users', () => {
    return {
        getUsers: jest.fn((req, res, next) => next()),
    };
});

jest.mock('middlewares/routes/products', () => {
    return {
        getProducts: jest.fn((req, res, next) => next()),
        postProducts: jest.fn((req, res, next) => next()),
        getProductById: jest.fn((req, res, next) => next()),
        getReviewsById: jest.fn((req, res, next) => next()),
    };
});

import { auth } from 'middlewares/routes/auth';
import { getUsers } from 'middlewares/routes/users';
import { 
    getProducts,
    postProducts,
    getProductById,
    getReviewsById 
} from 'middlewares/routes/products';

describe('Router', () => {
    it('Should return 404 for any wrong url', async () => {
        await get('/').expect(404);
    });
});

describe('/auth POST', () => {
    it('Should use an appropriate middleware', async () => {
        await post('/auth');
        expect(auth).toHaveBeenCalled();
    });
});

describe('/api/users GET', () => {
    it('Should use an appropriate middleware', async () => {
        await get('/api/users');
        expect(getUsers).toHaveBeenCalled();
    });
});

describe('/api/products GET', () => {
    it('Should use an appropriate middleware', async () => {
        await get('/api/products');
        expect(getProducts).toHaveBeenCalled();
    });
});

describe('/api/products POST', () => {
    it('Should use an appropriate middleware', async () => {
        await post('/api/products');
        expect(postProducts).toHaveBeenCalled();
    });
});

describe('/api/products/:id GET', () => {
    it('Should use an appropriate middleware', async () => {
        await get('/api/products/1');
        expect(getProductById).toHaveBeenCalled();
    });
});

describe('/api/products/:id/reviews GET', () => {
    it('Should use an appropriate middleware', async () => {
        await get('/api/products/1/reviews');
        expect(getReviewsById).toHaveBeenCalled();
    });
});
