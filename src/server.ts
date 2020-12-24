import * as http from 'http';
import * as express from 'express';
import * as cors from 'cors';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as path from 'path';

const router = express.Router();

var app = express();

app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'webapp')));

// error handler
app.use(function (err: any, req: any, res: any, next: any) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

let serverPort = 27122;

if (process.env.ENV == 'dev') {
    serverPort = 8080;
}

app.set('port', serverPort);

function startServer() {
    const app = express();
    const router = express.Router();

    app.use(cors());
    app.use(compression());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'webapp')));

    if (process.env.ENV != 'dev') {
        router.get('/*', function (req, res, next) {
            res.sendFile(path.resolve('./dist/webapp/index.html'));
        });
    }

    app.use('/', router);

    var server = http.createServer(app);

    server.listen(27122);
}

export {
    startServer,
    serverPort
}