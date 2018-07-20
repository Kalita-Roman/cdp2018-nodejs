import { sign, verify } from 'jsonwebtoken';

const SECRET = 'secret';

export const generateJWT = (payload) => sign(payload, SECRET);

export const verifyJWT = (token) => verify(token, SECRET);