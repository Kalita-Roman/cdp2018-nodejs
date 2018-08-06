import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { compose } from 'compose-middleware';
import { paths } from 'config';

const swaggerDocument = YAML.load(paths.swagger);

export default compose([
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
]);