"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var server_1 = require("./server");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbiBjb3B5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbWFpbiBjb3B5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQThDO0FBQzlDLDJCQUE2QjtBQUM3QixtQ0FBbUQ7QUFFbkQsU0FBUyxZQUFZO0lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxJQUFNLFVBQVUsR0FBRyxJQUFJLHdCQUFhLENBQUM7UUFDbkMsTUFBTSxFQUFFLEdBQUc7UUFDWCxjQUFjLEVBQUU7WUFDZCxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDO1NBQzVDO1FBQ0QsS0FBSyxFQUFFLEdBQUc7S0FDWCxDQUFDLENBQUM7SUFFSCxVQUFVLENBQUMsT0FBTyxDQUFDLHNCQUFvQixtQkFBWSxDQUFDLENBQUM7SUFDckQsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUN4QyxDQUFDO0FBRUQsY0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDZCxvQkFBVyxFQUFFLENBQUM7SUFDZCxZQUFZLEVBQUUsQ0FBQztJQUVmLGNBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFO1FBQ2pCLElBQUksd0JBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLFlBQVksRUFBRSxDQUFDO0lBQ2pFLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCxjQUFHLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFO0lBQzFCLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7UUFDakMsY0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ1o7QUFDSCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcCwgQnJvd3NlcldpbmRvdyB9IGZyb20gXCJlbGVjdHJvblwiO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgc3RhcnRTZXJ2ZXIsIHNlcnZlclBvcnQgfSBmcm9tICcuL3NlcnZlcic7XG5cbmZ1bmN0aW9uIGNyZWF0ZVdpbmRvdygpIHtcbiAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTk9ERV9FTlYpO1xuICBjb25zdCBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xuICAgIGhlaWdodDogNjAwLFxuICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICBwcmVsb2FkOiBwYXRoLmpvaW4oX19kaXJuYW1lLCBcInByZWxvYWQuanNcIiksXG4gICAgfSxcbiAgICB3aWR0aDogODAwLFxuICB9KTtcblxuICBtYWluV2luZG93LmxvYWRVUkwoYGh0dHA6Ly9sb2NhbGhvc3Q6JHtzZXJ2ZXJQb3J0fWApO1xuICBtYWluV2luZG93LndlYkNvbnRlbnRzLm9wZW5EZXZUb29scygpO1xufVxuXG5hcHAub24oXCJyZWFkeVwiLCAoKSA9PiB7XG4gIHN0YXJ0U2VydmVyKCk7XG4gIGNyZWF0ZVdpbmRvdygpO1xuXG4gIGFwcC5vbihcImFjdGl2YXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoQnJvd3NlcldpbmRvdy5nZXRBbGxXaW5kb3dzKCkubGVuZ3RoID09PSAwKSBjcmVhdGVXaW5kb3coKTtcbiAgfSk7XG59KTtcblxuYXBwLm9uKFwid2luZG93LWFsbC1jbG9zZWRcIiwgKCkgPT4ge1xuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gXCJkYXJ3aW5cIikge1xuICAgIGFwcC5xdWl0KCk7XG4gIH1cbn0pO1xuIl19