"use strict";
exports.__esModule = true;
exports.serverPort = exports.startServer = void 0;
var http = require("http");
var express = require("express");
var cors = require("cors");
var compression = require("compression");
var cookieParser = require("cookie-parser");
var path = require("path");
var router = express.Router();
var app = express();
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'webapp')));
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
var serverPort = 27122;
exports.serverPort = serverPort;
if (process.env.ENV == 'dev') {
    exports.serverPort = serverPort = 8080;
}
app.set('port', serverPort);
function startServer() {
    var app = express();
    var router = express.Router();
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
exports.startServer = startServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJCQUE2QjtBQUM3QixpQ0FBbUM7QUFDbkMsMkJBQTZCO0FBQzdCLHlDQUEyQztBQUMzQyw0Q0FBOEM7QUFDOUMsMkJBQTZCO0FBRTdCLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQyxJQUFJLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUVwQixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNqRCxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7QUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUV4RCxnQkFBZ0I7QUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLElBQVM7SUFDckQsa0RBQWtEO0lBQ2xELEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDakMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUVuRSx3QkFBd0I7SUFDeEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDeEIsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFrQ25CLGdDQUFVO0FBaENkLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksS0FBSyxFQUFFO0lBQzFCLHFCQUFBLFVBQVUsR0FBRyxJQUFJLENBQUM7Q0FDckI7QUFFRCxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUU1QixTQUFTLFdBQVc7SUFDaEIsSUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7SUFDdEIsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRWhDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pELEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXhELElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzFCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO1lBQ3JDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUM7S0FDTjtJQUVELEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRXJCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBR0csa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIGNvcnMgZnJvbSAnY29ycyc7XG5pbXBvcnQgKiBhcyBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XG5pbXBvcnQgKiBhcyBjb29raWVQYXJzZXIgZnJvbSAnY29va2llLXBhcnNlcic7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG52YXIgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvcnMoKSk7XG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5hcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJ3dlYmFwcCcpKSk7XG5cbi8vIGVycm9yIGhhbmRsZXJcbmFwcC51c2UoZnVuY3Rpb24gKGVycjogYW55LCByZXE6IGFueSwgcmVzOiBhbnksIG5leHQ6IGFueSkge1xuICAgIC8vIHNldCBsb2NhbHMsIG9ubHkgcHJvdmlkaW5nIGVycm9yIGluIGRldmVsb3BtZW50XG4gICAgcmVzLmxvY2Fscy5tZXNzYWdlID0gZXJyLm1lc3NhZ2U7XG4gICAgcmVzLmxvY2Fscy5lcnJvciA9IHJlcS5hcHAuZ2V0KCdlbnYnKSA9PT0gJ2RldmVsb3BtZW50JyA/IGVyciA6IHt9O1xuXG4gICAgLy8gcmVuZGVyIHRoZSBlcnJvciBwYWdlXG4gICAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzIHx8IDUwMCk7XG4gICAgcmVzLnJlbmRlcignZXJyb3InKTtcbn0pO1xuXG5sZXQgc2VydmVyUG9ydCA9IDI3MTIyO1xuXG5pZiAocHJvY2Vzcy5lbnYuRU5WID09ICdkZXYnKSB7XG4gICAgc2VydmVyUG9ydCA9IDgwODA7XG59XG5cbmFwcC5zZXQoJ3BvcnQnLCBzZXJ2ZXJQb3J0KTtcblxuZnVuY3Rpb24gc3RhcnRTZXJ2ZXIoKSB7XG4gICAgY29uc3QgYXBwID0gZXhwcmVzcygpO1xuICAgIGNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbiAgICBhcHAudXNlKGNvcnMoKSk7XG4gICAgYXBwLnVzZShjb21wcmVzc2lvbigpKTtcbiAgICBhcHAudXNlKGV4cHJlc3MuanNvbigpKTtcbiAgICBhcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XG4gICAgYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG4gICAgYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnd2ViYXBwJykpKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5FTlYgIT0gJ2RldicpIHtcbiAgICAgICAgcm91dGVyLmdldCgnLyonLCBmdW5jdGlvbiAocmVxLCByZXMsIG5leHQpIHtcbiAgICAgICAgICAgIHJlcy5zZW5kRmlsZShwYXRoLnJlc29sdmUoJy4vZGlzdC93ZWJhcHAvaW5kZXguaHRtbCcpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXBwLnVzZSgnLycsIHJvdXRlcik7XG5cbiAgICB2YXIgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKTtcblxuICAgIHNlcnZlci5saXN0ZW4oMjcxMjIpO1xufVxuXG5leHBvcnQge1xuICAgIHN0YXJ0U2VydmVyLFxuICAgIHNlcnZlclBvcnRcbn0iXX0=