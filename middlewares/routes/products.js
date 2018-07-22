import {
    fetchProducts,
    fetchProductById,
    removeProductById,
    addProduct
} from 'controllers/products';

import {
    fetchReviewsById,
} from 'controllers/reviews';

export const getProducts = async (req, res) => {
    const products = await fetchProducts();
    res.status(200).json(products);
};

export const postProducts = async (req, res) => {
    const product = await addProduct(req.body);
    res.status(200).json(product);
};

export const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await fetchProductById(id);
    if (product) {
        return res.status(200).json(product);
    }
    res.sendStatus(404);
};

export const deleteProductById = async (req, res) => {
    const { id } = req.params;
    const deletedItemsCount = await removeProductById(id);
    return res.status(200).json({ deletedItemsCount });
};

export const getReviewsById = async (req, res) => {
    const { id } = req.params;
    const reviews = await fetchReviewsById(id);
    if (reviews) {
        return res.status(200).json(reviews);
    }
    res.sendStatus(404);
};
