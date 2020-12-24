import { app, BrowserWindow } from "electron";
import * as path from "path";
import { startServer, serverPort } from './server';

function createWindow() {
  console.log(process.env.NODE_ENV);
  const mainWindow = new BrowserWindow({
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    width: 800,
  });

  mainWindow.loadURL(`http://localhost:${serverPort}`);
  mainWindow.webContents.openDevTools();
}

app.on("ready", () => {
  startServer();
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
