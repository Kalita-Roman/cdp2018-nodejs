import Product from 'models/mongo/Product';

export const fetchProducts = () => {
    return Product.find();
};

export const fetchProductById = (_id) => {
    return Product.findOne({ _id });
};

export const addProduct = async (product) => {
    try {
        const newProduct = new Product(product);
        return await newProduct.save();
    } catch (error) {
        return error;
    }
};

export const updateProductById = async (_id, product) => {
    const { n } = await Product.update({ _id }, product);
    return n;
};

export const removeProductById = async (_id) => {
    const { n } = await Product.deleteOne({ _id });
    return n;
};
