import SwaggerExpress from 'swagger-express-mw';
import { paths } from 'config';

const config = {
    appRoot: __dirname,
    swaggerFile: paths.swagger,
};

const waitSwaggerExpress = new Promise((resolve, reject) => {
    SwaggerExpress.create(config, function(error, swaggerExpress) {
        if (error) { 
            return reject(error); 
        }

        resolve(swaggerExpress.middleware());
    });
});

export default function swaggerApiMiddleware(req, res, next) {
    return waitSwaggerExpress
        .then(middleware => middleware(req, res, next))
        .catch((error) => {
            console.error(error);
            return next();
        });
}