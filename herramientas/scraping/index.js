const puppetter = require('puppeteer');

(async () => {
	console.log('lanzamos navegador');
	const browser = await puppetter.launch({headless: false});

	const page = await browser.newPage();

	// https://parascrapear.com/
	await page.goto('https://es.wikipedia.org/wiki/Node.js');

	var titulo = await page.evaluate(() => {
		const h1 = document.querySelector('.mw-page-title-main');
		const titulo = h1.innerHTML;

		console.log(titulo);

		return titulo;
	});

	console.log(titulo);

	console.log('cerramos navegador...');
	// browser.close();
	console.log('navegador cerrado');
})();
