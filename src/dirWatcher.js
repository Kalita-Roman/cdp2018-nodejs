import { watch } from 'chokidar';

export default class DirWatcher {
    constructor(handleChange, handleDelete) {
        this.handleChange = handleChange;
        this.handleDelete = handleDelete;
    }

    watch(path = './', delay = 1000) {
        const watcherOptions = {
            usePolling: true,
            interval: delay
        };
        this.wather = watch(path, watcherOptions)
            .on('add', this.handleChange)
            .on('change', this.handleChange)
            .on('unlink', this.handleDelete);
    }
}
