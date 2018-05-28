import { existsSync } from 'fs';
import { resolve } from 'path';

export default function getActionsSync(actionName) {
    const path = resolve('streams', 'actions', `${actionName}.js`);
    if (existsSync(path)) {
        return require(path);
    }
}

