export default function allowCors(req, res, next) {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*'
    });
    if ('OPTIONS' === req.method) {
        return res.send(200);
    }
    return next();
}
