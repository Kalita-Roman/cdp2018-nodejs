import {
    getProducts,
    postProducts,
    getProductById,
    getReviewsById
} from 'middlewares/routes/products';
import Res, { expectBody } from 'utils/test/Res';

const mockProducts = [];
const mockProduct = {};
const mockReviews = {};

jest.mock('controllers/products', () => ({
    fetchProducts: jest.fn(() => Promise.resolve(mockProducts)),
    fetchProductById: jest.fn(() => Promise.resolve(mockProduct)),
    fetchReviewsById: jest.fn(() => Promise.resolve(mockReviews)),
    addProduct: jest.fn(() => Promise.resolve(mockProduct)),
}));

describe('Middlewares for products', () => {
    it('Should', async () => {
        const req = {};
        const res = new Res();
        await getProducts(req, res);
        expectBody(res, mockProducts);
    });

    it('Should', async () => {
        const req = {};
        const res = new Res();
        await postProducts(req, res);
        expectBody(res, mockProduct);
    });

    it('Should', async () => {
        const req = { params: { id: 1 }};
        const res = new Res();
        await getProductById(req, res);
        expectBody(res, mockProduct);
    });

    it('Should', async () => {
        const req = { params: { id: 1 }};
        const res = new Res();
        await getReviewsById(req, res);
        expectBody(res, mockReviews);
    });
});
