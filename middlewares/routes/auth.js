import { getUser } from 'controllers/auth';
import { generateJWT } from 'services/jwt';

const SECRET = 'secret';

export const auth = async (req, res) => {
    const { body } = req;
    const user = await getUser(body);
    if (!user) {
        return res
            .status(404)
            .json({
                code: 404,
                message: 'Not Found',
                data: { }
            });
    }
    const token = generateJWT({ user }, SECRET);
    return res
        .cookie('token', token)
        .status(200)
        .json({ 
            code: 200,
            message: 'OK',
            data: { user },
            token
        });
};
