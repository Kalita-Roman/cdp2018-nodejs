import { createModel } from 'services/mongooseServise';

const schema = {
    name: { type: String, required: true },
    country: { type: String, required: true },
    capital: { type: Boolean, required: true },
    location: {
        lat: { type: Number },
        long: { type: Number },
    },
};

export default createModel('cities', schema);