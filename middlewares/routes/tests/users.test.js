import { getUsers } from 'middlewares/routes/users';
import Res, { expectBody } from 'utils/test/Res';

const mockUSERS = [];

jest.mock('controllers/users', () => ({
    fetchUsers: jest.fn(() => Promise.resolve(mockUSERS))
}));

describe('Router', () => {
    it('Should return 404 for any wrong url', async () => {
        const req = {};
        const res = new Res();
        await getUsers(req, res);
        expectBody(res, mockUSERS);
    });
});
