import mongoose from 'mongoose';
import { mongoDBconnectionUrl } from 'config';

const Schema = mongoose.Schema;

const connection = mongoose.createConnection(mongoDBconnectionUrl, { useNewUrlParser: true });

export default connection;

export const createModel = (modelName, schema) => connection.model(modelName, new Schema(schema));
