import { MongoClient } from 'mongodb';

const username = 'nodejs-cdp';
const password = 'nodejs-2018';
const url = `mongodb://${username}:${password}@ds247141.mlab.com:47141/nodejs-cdp`;

const dbName = 'nodejs-cdp';

const db = (method) => {
    MongoClient.connect(url, function (error, client) {
        if(error) {
            return console.error('Connection to mongodb is failed!');
        }
        console.log('Connection to mongodb is succeed!');
        const db = client.db(dbName);
        method(db, () => client.close());
    });
};

export default db;
