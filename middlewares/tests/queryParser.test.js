import queryParser, { QUERY } from '../queryParser';

describe('queryParser', () => {
    it('Should call \'next\' once at the end', () => {
        const req = { originalUrl: '' };
        const next = jest.fn();
        queryParser(req, undefined, next);
        expect(next).toHaveBeenCalled();
    });

    it(`Should put '${QUERY}' field to request`, () => {
        const req = { originalUrl: '/api?a=1&b=2' };
        queryParser(req, undefined, () => {});
        expect(req[QUERY]).toEqual({
            a:'1', 
            b:'2'
        });
    });

    it(`Should put empty '${QUERY}' field to request`, () => {
        const req = { originalUrl: '/api?a=1b=2' };
        queryParser(req, undefined, () => {});
        expect(req[QUERY]).toEqual({});
    });
});
