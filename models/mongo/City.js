import mongoose from 'mongoose';

import { mongoDBconnectionUrl } from 'config';

const Schema = mongoose.Schema;
const CitySchema = new Schema({});

const connection = mongoose.createConnection(mongoDBconnectionUrl, { useNewUrlParser: true });
const CityModel = connection.model('cities', CitySchema);

export default CityModel;