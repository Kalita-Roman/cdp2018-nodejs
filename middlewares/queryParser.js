export const QUERY = 'parsedQuery';

export default function queryParser(req, res, next) {
    req[QUERY] = {};
    const { originalUrl } = req;
    const re = /([^?=&]+)=([^&]*)/g;
    const groups = originalUrl.match(re);
    if(!groups) {
        return next();
    }
    groups
        .map(s => s.split('='))
        .filter(a => a.length === 2)
        .reduce((prev, [key, value]) => (prev[key] = value, prev), req[QUERY]);
    next();
}