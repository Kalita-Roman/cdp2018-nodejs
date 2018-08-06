import { 
    fetchUsers, 
    fetchUserById,
    updateUserById,
    addUser,
    removeUserById
} from 'controllers/users';

export const getUsers = async (req, res) => {
    const users = await fetchUsers();
    res.status(200).json(users);
};

export const getUserById = async (req, res) => {
    const id = req.params.id || req.swagger.params.id.value;
    const users = await fetchUserById(id);
    res.status(200).json(users);
};

export const postUsers = async (req, res) => {
    const user = await addUser(req.body);
    res.status(200).json(user);
};

export const putUserById = async (req, res) => {
    const { body } = req;
    const id = req.params.id || req.swagger.params.id.value;
    const user = await updateUserById(id, body);
    res.status(200).json(user);
};

export const deleteUserById = async (req, res) => {
    const id = req.params.id || req.swagger.params.id.value;
    const deletedItemsCount = await removeUserById(id);
    return res.status(200).json({ deletedItemsCount });
};