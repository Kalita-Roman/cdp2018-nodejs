import { watch } from 'chokidar';
import emitter from './services/pubsub';

export default class DirWatcher {
    watch(path = './', delay = 1000) {
        const watcherOptions = {
            usePolling: true,
            interval: delay
        };
        this.wather = watch(path, watcherOptions)
            .on('add', addHandler)
            .on('change', changeHandler)
            .on('unlink', unlinkHandler);
    }
}

function addHandler(path) {
    emitter.emit('dirwatcher:changed', path);
}

function changeHandler(path) {
    emitter.emit('dirwatcher:changed', path);
}

function unlinkHandler(path) {
    emitter.emit('dirwatcher:deleted', path);
}
