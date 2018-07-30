import { createModel } from 'services/mongooseServise';

const schema = {
    name: { type: String, required: true },
};

export default createModel('users', schema);