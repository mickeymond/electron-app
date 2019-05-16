const { app, BrowserWindow, Menu } = require('electron');
const screenLoader = require('./src/utils/screenLoader');

let mainWindow;

app.on('ready', () => {
  // Create the Browser Window
  mainWindow = new BrowserWindow({});

  // and load index.html of the app
  mainWindow.loadURL(screenLoader('src/screens/all-todos/index.html'));

  // Setting application menu
  const mainMenu = Menu.buildFromTemplate(require('./src/menu')(mainWindow));
  Menu.setApplicationMenu(mainMenu);

  // Close app on window close
  mainWindow.on('closed', () => {
    app.quit();
  });
});
