import Sequelize from 'sequelize';
import db from 'services/sequelizeService';

const Product = db.define('product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
});

Product.sync();

export default Product;