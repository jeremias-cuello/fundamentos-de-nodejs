const { app, browser, BrowserWindow } = require('electron');
const { Browser } = require('puppeteer');

let ventanaPrincipal;

app.on('ready', crearVentana);

function crearVentana(){
	ventanaPrincipal = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: { }
		}
	})

	ventanaPrincipal.loadFile('index.html')
}
