import config from './config/config.json';
import { Product, User } from './models';
import DirWatcher from './src/dirWatcher.js';
import Importer from './src/importer.js';

const { paths, watching } = config;
const { data: dataPath } = paths;
const { delay } = watching;

new User();
new Product();

const importer = new Importer();

const dirwatcher = new DirWatcher(importer.import, handleFileDeleting);
//const dirwatcher = new DirWatcher(importer.importSync);
dirwatcher.watch(dataPath, delay);

function handleFileDeleting (path) {
    console.log(`File "${path}" has been deleted.`);
}