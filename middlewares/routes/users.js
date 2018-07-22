import { fetchUsers, fetchUserById, addUser, removeUserById } from 'controllers/users';

export const getUsers = async (req, res) => {
    const users = await fetchUsers();
    res
        .status(200)
        .json(users);
};

export const postUsers = async (req, res) => {
    const user = await addUser(req.body);
    res.status(200).json(user);
};

export const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await fetchUserById(id);
    if (user) {
        return res.status(200).json(user);
    }
    res.sendStatus(404);
};

export const deleteUserById = async (req, res) => {
    const { id } = req.params;
    const deletedItemsCount = await removeUserById(id);
    return res.status(200).json({ deletedItemsCount });
};