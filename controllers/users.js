import User from 'models/mongo/User';

export const fetchUsers = () => {
    return User.find();
};

export const fetchUserById = (_id) => {
    return User.findOne({ _id });
};

export const addUser = async user => {
    try {
        const newUser = new User(user);
        return await newUser.save();
    } catch (error) {
        return error;
    }
};

export const updateUserById = async (_id, user) => {
    const { n } = await User.update({ _id }, user);
    return n;
};

export const removeUserById = async (_id) => {
    const { n } = await City.deleteOne({ _id });
    return n;
};