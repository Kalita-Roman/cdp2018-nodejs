import cookiesParser, { COOKIES } from '../cookiesParser';

const COOKIE_STRING = 'cookie-one=value-one; cookie-two=value-two';

describe('cookiesParser', () => {
    it('should call \'next\' once if cookies present already', () => {
        const req = { [COOKIES]: COOKIE_STRING };
        const next = jest.fn();
        cookiesParser(req, undefined, next);
        expect(next).toHaveBeenCalled();
    });

    it('should call \'next\' once if header \'cookie\' is absent', () => {
        const req = { headers: {} };
        const next = jest.fn();
        cookiesParser(req, undefined, next);
        expect(next).toHaveBeenCalled();
    });

    it('should parse and set coolkies', () => {
        const req = {
            headers: {
                cookie: COOKIE_STRING
            }
        };
        cookiesParser(req, undefined, jest.fn());
        expect(req[COOKIES]).toEqual({
            'cookie-one': 'value-one',
            'cookie-two': 'value-two'
        });
    });

    it('should call \'next\' once at the end', () => {
        const req = { headers: { cookie: COOKIE_STRING } };
        const next = jest.fn();
        cookiesParser(req, undefined, next);
        expect(next).toHaveBeenCalled();
    });
});