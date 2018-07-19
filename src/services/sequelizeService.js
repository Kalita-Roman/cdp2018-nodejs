import Sequelize from 'sequelize';

const database = 'dcrt33lccijqes';
const username = 'hxlxcqdxrhbngt';
const password =
    '93fba9b0ab821791a24f6e28e331a6529512f85e7da6df431680dab234d3f130';
const host = 'ec2-50-19-86-139.compute-1.amazonaws.com';
const port = 5432;

const options = {
    host,
    port,
    dialect: 'postgres',
    dialectOptions: { ssl: true }
};

const sequelize = new Sequelize(database, username, password, options);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(error => {
        console.error('Unable to connect to the database:', error);
    });

export default sequelize;

// const User = sequelize.define('user', {
//     id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name: Sequelize.STRING,
// });



// User.sync()
//     .then(() => {
//         User.findAll().then(users => {
//             console.log('');
//             users.forEach(user => {
//                 console.log(user.get('id'));
//                 console.log(user.get('name'));
//             });
//         });
//     });

// User.findAll().then(users => {
//     console.log('');
//     users.forEach(user => {
//         console.log(user.get('id'));
//         console.log(user.get('name'));
//     });
// });

//User.create({ id: 'fnord', job: 'omnomnom' });


