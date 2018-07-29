import mongoose from 'mongoose';

import { mongoDBconnectionUrl } from 'config';

const Schema = mongoose.Schema;
const CitySchema = new Schema({
    name: { type: String },
    country: { type: String },
    capital: { type: Boolean },
    location: {
        lat: { type: Number },
        long:  { type: Number },
    },
});

const connection = mongoose.createConnection(mongoDBconnectionUrl, { useNewUrlParser: true });
const CityModel = connection.model('cities', CitySchema);

export default CityModel;