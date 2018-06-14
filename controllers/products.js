import { readFilePromise, writeFilePromise } from 'utils/fsUtils';

const PRODUCTS_FILE = './data/api/products.json';
const REVIEWS_FILE = './data/api/reviews.json';

export const fetchProducts = () => {
    return readFilePromise(PRODUCTS_FILE);
};

export const fetchProductById = async idParam => {
    const products = await readFilePromise(PRODUCTS_FILE);
    return products.find(({ id }) => id === idParam);
};

export const fetchReviewsById = async idParam => {
    const reviews = await readFilePromise(REVIEWS_FILE);
    return reviews.filter(({ productId }) => productId === idParam);
};

export const addProduct = async newProduct => {
    const products = await readFilePromise(PRODUCTS_FILE);
    const newProducts = pushProduct(products, newProduct);
    await writeFilePromise(PRODUCTS_FILE, newProducts);
    return newProduct;
};

function pushProduct(target, product) {
    if (!Array.isArray(target)) {
        return [product];
    } 
    target.push(product);
    return target;
}
