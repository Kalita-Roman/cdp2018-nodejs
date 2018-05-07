import config from './config/config.json';
import emitter from "./src/services/pubsub";
import { Product, User } from './models';
import DirWatcher from './src/dirWatcher.js';
import Importer from './src/importer.js';

const { paths, watching } = config;
const { data: dataPath } = paths;
const { delay } = watching;

new User();
new Product();

const dirwatcher = new DirWatcher();
dirwatcher.watch(dataPath, delay);

const importer = new Importer();

//emitter.on('dirwatcher:changed', importer.importSync);
emitter.on('dirwatcher:changed', importer.import);