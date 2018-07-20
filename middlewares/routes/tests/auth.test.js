import { auth } from 'middlewares/routes/auth';
import Res, { expectBody } from 'utils/test/Res';

let mockUser;
const mockToken = 'token';

jest.mock('controllers/auth', () => ({
    getUser: jest.fn(() => Promise.resolve(mockUser)),
}));

jest.mock('jsonwebtoken', () => ({
    sign: jest.fn(() => mockToken),
}));

describe('Router', () => {
    it('Should return a success response', async () => {
        mockUser = {};
        const body = {};
        const responce = {
            code: 200,
            message: 'OK',
            data: { user: mockUser },
            token: mockToken
        };
        const req = { body };
        const res = new Res();
        await auth(req, res);
        expectBody(res, responce);
    });

    it('Should return a fail response', async () => {
        mockUser = null;
        const body = {};
        const responce = {
            code: 404,
            message: 'Not Found',
            data: { }
        };
        const req = { body };
        const res = new Res();
        await auth(req, res);
        expectBody(res, responce, 404);
    });
});
