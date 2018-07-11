import request from 'utils/test/requestForTestedApp';

const { post } = request;

describe('passport', () => {
    it('Should work', async () => {
        await post('/pass')
            .set('Accept', 'application/json')
            .send({username: 'U', password: 'P'})
            .expect(200);
    });
});