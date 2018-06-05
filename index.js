require('babel-core/register');
require('babel-polyfill');

const app = require('./app.js').default;

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`App listening on port ${port}!`));
