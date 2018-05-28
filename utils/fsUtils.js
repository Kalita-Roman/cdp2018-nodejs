import { existsSync, mkdirSync } from 'fs';

export function createDirIfItAbsents(dir) {
    if (!existsSync(dir)) {
        mkdirSync(dir);
    }
}
