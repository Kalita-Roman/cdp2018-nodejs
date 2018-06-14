import { 
    existsSync,
    mkdirSync,
    readFile, 
    writeFile
} from 'fs';

const ENCODING = 'utf8';

export function createDirIfItAbsents(dir) {
    if (!existsSync(dir)) {
        mkdirSync(dir);
    }
}

export async function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        readFile(path, ENCODING, (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(JSON.parse(data));
        });
    });
}

export async function writeFilePromise(path, data) {
    return new Promise((resolve, reject) => {
        writeFile(path, JSON.stringify(data), ENCODING, err => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
}
