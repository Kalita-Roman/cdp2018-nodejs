import { watch } from "chokidar";
import emitter from "./services/pubsub";

export default class DirWatcher {
    watch(path = './', delay = 1000) {
        const watcherOptions = {
            usePolling: true,
            interval: delay
        };
        this.wather = watch(path, watcherOptions);
        this.wather.on("change", changeHandler);
    }
}

function changeHandler(path) {
    emitter.emit("dirwatcher:changed", path);
}
