import {
    fetchProducts,
    fetchProductById,
    addProduct,
    updateProductById,
    removeProductById,
} from 'controllers/products';

import {
    fetchReviewsById,
} from 'controllers/reviews';

export const getProducts = async (req, res) => {
    const products = await fetchProducts();
    res.status(200).json(products);
};

export const getProductById = async (req, res) => {
    const id = req.params.id || req.swagger.params.id.value;
    const product = await fetchProductById(id);
    if (product) {
        return res.status(200).json(product);
    }
    res.sendStatus(404);
};

export const postProducts = async (req, res) => {
    const product = await addProduct(req.body);
    res.status(200).json(product);
};

export const putProductById = async (req, res) => {
    const { body } = req;
    const id = req.params.id || req.swagger.params.id.value;
    const user = await updateProductById(id, body);
    res.status(200).json(user);
};

export const deleteProductById = async (req, res) => {
    const id = req.params.id || req.swagger.params.id.value;
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
