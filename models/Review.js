import Sequelize from 'sequelize';
import db from 'services/sequelizeService';

const Review = db.define('review', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    productId: Sequelize.INTEGER,
    content: Sequelize.TEXT,
});

export default Review;