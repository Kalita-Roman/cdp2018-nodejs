import { readFile, readFileSync } from './services/fileSystem';
import { csvParseSync } from './services/csvProcessor';

export default class Importer {
    import(path) {
        return readFile(path)
            .then(csvParseSync)
            .then(data => ( console.log('\n', path, '\n', data), data ));
    }

    importSync(path) {
        const fileData = readFileSync(path);
        const data = csvParseSync(fileData);
        console.log('\n', path, '\n', data);
        return data;
    }
}
