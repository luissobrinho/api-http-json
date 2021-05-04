const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (['POST'].includes(req.method)) {
        req.body.createdAt = Date.now();
        req.body.updateddAt = Date.now();
    } else if (['PUT'].includes(req.method)) {
        req.body.updateddAt = Date.now();
    }
    // Continue to JSON Server router
    next();
});

router.render = (req, res) => {
    if (JSON.stringify(res.locals.data) !== '{}') {
        res.json(res.locals.data);
    } else {
        res.status(404).jsonp({
            message: "Not Found!"
        });
    }
}

server.use(middlewares);
server.use('/api', router);

server.listen(80, () => {
    console.log('JSON Server is running');
});