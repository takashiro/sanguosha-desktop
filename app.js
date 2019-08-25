
const {app, BrowserWindow} = require('electron');

let mainWindow = null;

function createMainWindow() {
	mainWindow = new BrowserWindow;
	mainWindow.loadFile('./node_modules/@karuta/sanguosha-gui/dist/index.html');

	mainWindow.on('closed', function () {
		mainWindow = null;
	});
}

app.on('ready', createMainWindow);

app.on('activate', function () {
	if (mainWindow === null) {
		createMainWindow();
	}
});

app.on('window-all-closed', function () {
	app.quit();
});
