import { Transform } from 'stream';

export default class Transformer extends Transform {
    constructor(hundler) {
        super();
        this.hundler = hundler;
    }

    _transform(chunk, encoding, done) {
        done(null, this.hundler(chunk.toString()));
    }
}

export const transformChunkToString = new Transformer(chunk => chunk.toString());