import { readFilePromise } from 'utils/fsUtils';
import Product from 'models/Product';

const REVIEWS_FILE = './data/api/reviews.json';

export const fetchProducts = () => {
    return Product.findAll({ raw : true });
};

export const fetchProductById = idParam => {
    return Product.find({ 
        where: { id: idParam }, 
        raw : true 
    });
};

export const fetchReviewsById = async idParam => {
    const reviews = await readFilePromise(REVIEWS_FILE);
    return reviews.filter(({ productId }) => productId === idParam);
};

export const addProduct = async newProduct => {
    const { dataValues } = await Product.create(newProduct);
    return dataValues;
};

