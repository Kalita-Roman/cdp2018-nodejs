import { MongoClient } from 'mongodb';

import { mongoDBconnectionUrl } from 'config';

const dbName = 'nodejs-cdp';

const db = (method) => {
    MongoClient.connect(mongoDBconnectionUrl, { useNewUrlParser: true }, function (error, client) {
        if(error) {
            return console.error('Connection to mongodb is failed!');
        }
        console.log('Connection to mongodb is succeed!');
        const db = client.db(dbName);
        method(db, () => client.close());
    });
};

export default db;
