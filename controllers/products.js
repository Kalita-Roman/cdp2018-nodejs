import Product from 'models/Product';

export const fetchProducts = () => {
    return Product.findAll({ raw : true });
};

export const fetchProductById = idParam => {
    return Product.find({ 
        where: { id: idParam }, 
        raw : true 
    });
};

export const removeProductById = id => {
    return Product.destroy({
        where: { id }
    });
};

export const addProduct = async newProduct => {
    const { dataValues } = await Product.create(newProduct);
    return dataValues;
};
