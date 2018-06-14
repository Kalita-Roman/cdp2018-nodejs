import { readFilePromise } from 'utils/fsUtils';

const USERS_FILE = './data/api/users.json';

export const fetchUsers = () => {
    return readFilePromise(USERS_FILE);
};