import { 
    fetchUsers, 
    fetchUserById,
    updateCityById,
    addUser,
    removeUserById
} from 'controllers/users';

export const getUsers = async (req, res) => {
    const users = await fetchUsers();
    res.status(200).json(users);
};

export const getUserById = async (req, res) => {
    const { params: { id }} = req;
    const users = await fetchUserById(id);
    res.status(200).json(users);
};

export const postUsers = async (req, res) => {
    const user = await addUser(req.body);
    res.status(200).json(user);
};

export const putUserById = async (req, res) => {
    const { body, params: { id }} = req;
    const user = await updateCityById(id, body);
    res.status(200).json(user);
};

export const deleteUserById = async (req, res) => {
    const { id } = req.params;
    const deletedItemsCount = await removeUserById(id);
    return res.status(200).json({ deletedItemsCount });
};