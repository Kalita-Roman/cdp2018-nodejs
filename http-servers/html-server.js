import http from 'http';
import { readFileSync } from 'fs';
import url from 'url';
import querystring from 'querystring';
import { port } from 'config';
import processTemplate from 'services/htmlTemplator';

const pathToHtmlFile = 'data/index.html';

const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url);
    if(pathname !== '/') {
        return res.end();
    }
    const data = querystring.parse(query);
    const htmlFile = readFileSync(pathToHtmlFile, 'utf8');
    res.setHeader('Content-Type', 'html');
    res.end(processTemplate(htmlFile, data));
});

server.listen(port);
