export const COOKIES = 'parsedCookies';

export default function cookiesParser(req, res, next) {
    if (req[COOKIES]) {
        return next();
    }
    const { cookie } = req.headers;
    if (!cookie) {
        return next();
    }
    req[COOKIES] = cookie.split(';')
        .map(s => s.trim().split('='))
        .reduce((prev, [key, value]) => (prev[key] = value, prev), {});
    next();
}