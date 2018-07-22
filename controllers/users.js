import User from 'models/User';

export const fetchUsers = () => {
    return User.findAll({ raw : true });
};