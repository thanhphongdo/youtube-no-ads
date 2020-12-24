"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var server_1 = require("./server");
require('source-map-support').install();
function createWindow() {
    console.log(process.env.NODE_ENV);
    var mainWindow = new electron_1.BrowserWindow({
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        },
        width: 800
    });
    mainWindow.loadURL("http://localhost:" + server_1.serverPort);
    mainWindow.webContents.openDevTools();
}
electron_1.app.on("ready", function () {
    server_1.startServer();
    createWindow();
    electron_1.app.on("activate", function () {
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUE4QztBQUM5QywyQkFBNkI7QUFDN0IsbUNBQW1EO0FBQ25ELE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBRXhDLFNBQVMsWUFBWTtJQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsSUFBTSxVQUFVLEdBQUcsSUFBSSx3QkFBYSxDQUFDO1FBQ25DLE1BQU0sRUFBRSxHQUFHO1FBQ1gsY0FBYyxFQUFFO1lBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQztTQUM1QztRQUNELEtBQUssRUFBRSxHQUFHO0tBQ1gsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFDLE9BQU8sQ0FBQyxzQkFBb0IsbUJBQVksQ0FBQyxDQUFDO0lBQ3JELFVBQVUsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDeEMsQ0FBQztBQUVELGNBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ2Qsb0JBQVcsRUFBRSxDQUFDO0lBQ2QsWUFBWSxFQUFFLENBQUM7SUFFZixjQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRTtRQUNqQixJQUFJLHdCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxZQUFZLEVBQUUsQ0FBQztJQUNqRSxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsY0FBRyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtJQUMxQixJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1FBQ2pDLGNBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNaO0FBQ0gsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHAsIEJyb3dzZXJXaW5kb3cgfSBmcm9tIFwiZWxlY3Ryb25cIjtcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IHN0YXJ0U2VydmVyLCBzZXJ2ZXJQb3J0IH0gZnJvbSAnLi9zZXJ2ZXInO1xucmVxdWlyZSgnc291cmNlLW1hcC1zdXBwb3J0JykuaW5zdGFsbCgpO1xuXG5mdW5jdGlvbiBjcmVhdGVXaW5kb3coKSB7XG4gIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5PREVfRU5WKTtcbiAgY29uc3QgbWFpbldpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KHtcbiAgICBoZWlnaHQ6IDYwMCxcbiAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgcHJlbG9hZDogcGF0aC5qb2luKF9fZGlybmFtZSwgXCJwcmVsb2FkLmpzXCIpLFxuICAgIH0sXG4gICAgd2lkdGg6IDgwMCxcbiAgfSk7XG5cbiAgbWFpbldpbmRvdy5sb2FkVVJMKGBodHRwOi8vbG9jYWxob3N0OiR7c2VydmVyUG9ydH1gKTtcbiAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoKTtcbn1cblxuYXBwLm9uKFwicmVhZHlcIiwgKCkgPT4ge1xuICBzdGFydFNlcnZlcigpO1xuICBjcmVhdGVXaW5kb3coKTtcblxuICBhcHAub24oXCJhY3RpdmF0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKEJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cygpLmxlbmd0aCA9PT0gMCkgY3JlYXRlV2luZG93KCk7XG4gIH0pO1xufSk7XG5cbmFwcC5vbihcIndpbmRvdy1hbGwtY2xvc2VkXCIsICgpID0+IHtcbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gIT09IFwiZGFyd2luXCIpIHtcbiAgICBhcHAucXVpdCgpO1xuICB9XG59KTtcbiJdfQ==