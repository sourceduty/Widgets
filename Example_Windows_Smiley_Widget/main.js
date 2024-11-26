const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 200,
    height: 200,
    frame: false, // Frameless window
    transparent: true, // Allows a transparent background
    alwaysOnTop: true, // Stays on top of other windows
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'renderer.js'), // Load behavior
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  // Load the HTML file
  mainWindow.loadFile('index.html');

  // Remove the menu bar
  mainWindow.setMenuBarVisibility(false);
});
