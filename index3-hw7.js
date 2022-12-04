if ("loading" in HTMLImageElement.prototype) {
	// supported in browser
	console.log("Браузер підтримує лінивки");
} else {
	// fetch polyfill/third-party library
	console.log("Браузер не підтримує лінивки");
}
