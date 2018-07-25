import getDB from 'services/mongodbService';

export default async function randomCity() {
    const cities = await new Promise((resolve, reject) => {
        getDB((db, done) => {
            db
                .collection('cities')
                .find({})
                .toArray(function(error, cities) {
                    if(error) {
                        reject(error);
                    }
                    resolve(cities);
                    done();
                });
        });
    });
    return cities[random(cities.length)];
}

function random(count) {
    return Math.floor(Math.random()*count);
}

