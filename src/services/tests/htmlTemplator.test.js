import htmlTemplator from '../htmlTemplator';

describe('htmlTemplator', () => {
    it('should replace the templates to data', () => {
        const template = `<html>
            <head></head>
            <body>
                <h1>{header}</h1>
                <p>{content}<p>
                <p>{wrong}<p>
            </body>
        </html>`;
        const expected = `<html>
            <head></head>
            <body>
                <h1>Lorem Header</h1>
                <p>Lorem Content<p>
                <p>{wrong}<p>
            </body>
        </html>`;
        const data = {
            header: 'Lorem Header',
            content: 'Lorem Content',
        };
        const actual = htmlTemplator(template, data);
        expect(actual).toBe(expected);
    });
});
