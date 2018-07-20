import { verifyJWT } from 'services/jwt';
import { get } from 'lodash';

export default function verification(req, res, next) {
    const token = get(req, 'parsedCookies.token');
    const payload = verifyJWT(token);
    const user = get(payload, 'user');
    if (user) {
        req.user = user;
        return next();
    }
    return res
        .status(403)
        .send('404<br>Wrong token!');
}