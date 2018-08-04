import User from 'models/User';

export const fetchUsers = () => {
    return User.findAll({ raw : true });
};

export const addUser = async newUser => {
    const { dataValues } = await User.create(newUser);
    return dataValues;
};

export const fetchUserById = id => {
    return User.find({ 
        where: { id }, 
        raw : true 
    });
};

export const removeUserById = (id) => {
    return User.destroy({
        where: { id }
    });
};