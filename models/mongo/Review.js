import mongoose from 'mongoose';

import { createModel } from 'services/mongooseServise';

const { ObjectId } = mongoose.Schema.Types;

const schema = {
    content: { type: String },
    product: { type: ObjectId, required: true },
    user: { type: ObjectId, required: true },
};

export default createModel('reviews', schema);