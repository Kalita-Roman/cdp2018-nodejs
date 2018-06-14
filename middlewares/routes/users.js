import { fetchUsers } from 'controllers/users';

export const getUsers = async (req, res) => {
    const users = await fetchUsers();
    res
        .status(200)
        .json(users);
};
