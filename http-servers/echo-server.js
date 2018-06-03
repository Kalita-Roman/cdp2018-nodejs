import http from 'http';
import { port } from 'config';

const server = http.createServer((req, res) => {
    req.pipe(res);
});

server.listen(port);
