import Sequelize from 'sequelize';
import db from 'services/sequelizeService';

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
});

User.sync();

export default User;
