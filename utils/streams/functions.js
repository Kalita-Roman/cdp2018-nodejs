import fs from 'fs';
import Transformer, {
    transformChunkToString,
} from './Transformer';
import parse from 'csv-parse';
import Importer from '../../src/importer.js';
import config from '../../config/config.json';
import { resolve, basename } from 'path';
import { createDirIfItAbsents } from '../fsUtils';

process.stdin.setEncoding('utf8');

const resolvePath = (...args) => resolve('..', ...args);
const outputPath = config.paths.output;

export const argTypes = {
    str: 'str',
    filePath: 'filePath',
    path: 'path',
};

export default {
    reverse: {
        argType: argTypes.str,
        func: () => {
            const handler = str =>
                str
                    .split('')
                    .reverse()
                    .join('');
            const reverseChunk = new Transformer(handler);
            process.stdin
                .pipe(transformChunkToString)
                .pipe(reverseChunk)
                .pipe(process.stdout);
        }
    },

    transform: {
        argType: argTypes.str,
        func: () => {
            const handler = str => str.toUpperCase();
            const upperCaseChunk = new Transformer(handler);
            process.stdin
                .pipe(transformChunkToString)
                .pipe(upperCaseChunk)
                .pipe(process.stdout);
        }
    },

    outputFile: {
        argType: argTypes.filePath,
        func: function outputFile(filePath) {
            fs.createReadStream(filePath)
                .pipe(process.stdout);
        }
    },

    convertFromFile: {
        argType: argTypes.filePath,
        func: function convertFromFile(filePath) {
            const jsonFile = new Importer().importSync(filePath);
            process.stdout.write(JSON.stringify(jsonFile));
        }
    },

    convertToFile: {
        argType: argTypes.filePath,
        func: function convertToFile(filePath) {
            const readFileSteam = fs.createReadStream(filePath);
            const fileName = basename(filePath, '.csv');
            createDirIfItAbsents(outputPath);
            const writeFileSteam = fs.createWriteStream(
                resolvePath(outputPath, `${fileName}.json`)
            );
            const parseSteam = parse({ columns: true });
            const arr = [];
            const writeArrToFile = () => writeFileSteam.end(JSON.stringify(arr));
            parseSteam.on('data', arr.push.bind(arr)).on('unpipe', writeArrToFile);
            readFileSteam.pipe(parseSteam);
        }
    },

    cssBundler: {
        argType: argTypes.path,
        func: function cssBundler(paths) {
            const { defaultCSS } = config.paths;
            paths.push(resolvePath(defaultCSS));
            createDirIfItAbsents(outputPath);
            const writer = fs.createWriteStream(
                resolvePath(outputPath, 'bundle.css')
            );
            paths.forEach(path => {
                const reader = fs.createReadStream(path);
                reader.pipe(writer);
            });
        }
    }
};
