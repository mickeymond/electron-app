const { app } = require('electron');
const screenLoader = require('./utils/screenLoader');

module.exports = mainWindow => {
  const menuTemplate = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Clear All Todos'
        },
        {
          label: 'Quit',
          accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
          click: () => app.quit(),
        }
      ]
    },
    {
      label: 'All Todos',
      click: () => mainWindow.loadURL(screenLoader('src/screens/all-todos/index.html'))
    },
    {
      label: 'Add Todo',
      click: () => mainWindow.loadURL(screenLoader('src/screens/add-todo/index.html'))
    }
  ];

  if(process.env.NODE_ENV !== 'production') {
    menuTemplate.push({
      label: 'Dev Tools',
      submenu: [
        {
          label: 'Toggle DevTools',
          accelerator: process.platform === 'darwin' ? 'Command+I' : 'Ctrl+I',
          click: (item, focusedWindow) => focusedWindow.toggleDevTools()
        },
        {
          role: 'reload'
        }
      ]
    });
  }

  return menuTemplate;
}