import Product from 'models/Product';
import Review from 'models/Review';

export const fetchProducts = () => {
    return Product.findAll({ raw : true });
};

export const fetchProductById = idParam => {
    return Product.find({ 
        where: { id: idParam }, 
        raw : true 
    });
};

export const fetchReviewsById = productId => {
    return Review.findAll({
        where: { productId },
        raw : true 
    });
};

export const addProduct = async newProduct => {
    const { dataValues } = await Product.create(newProduct);
    return dataValues;
};

