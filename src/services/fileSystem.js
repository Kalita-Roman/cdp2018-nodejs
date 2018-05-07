import fs from 'fs';

const encode = 'utf8';

export function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, encode, (error, data) => {
            if (error) {
                return reject(error);
            };
            return resolve(data);
        })
    })
}

export function readFileSync(path) {
    return fs.readFileSync(path, encode);
}