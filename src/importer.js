import { readFile, readFileSync } from './services/fileSystem';
import { csvParseSync } from './services/csvProcessor';

export default class Importer {
    import(path) {
        return readFile(path)
            .then(csvParseSync)
            .then(data => ( console.log(data), data ));
    }

    importSync(path) {
        const fileData = readFileSync(path);
        const result = csvParseSync(fileData);
        console.log(result);
        return result;
    }
}
