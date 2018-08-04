import mongoose from 'mongoose';
import { mongoDBconnectionUrl } from 'config';
import lastModifiedPlugin from './lastModifiedPlugin';

mongoose.plugin(lastModifiedPlugin);

const { Schema } = mongoose;

const connection = mongoose.createConnection(mongoDBconnectionUrl, { useNewUrlParser: true });

export default connection;

export const createModel = (modelName, schemaPattern) => {
    const schema = new Schema(schemaPattern);
    schema.plugin(lastModifiedPlugin);
    return connection.model(modelName, schema);
};
