compare();

async function compare()
{
	const Jimp = require("jimp");

	const edinburgh_original = await Jimp.read("edinburgh_original.jpg");
	const edinburgh_sharpened = await Jimp.read("edinburgh_sharpened.jpg");
	const edinburgh_bw = await Jimp.read("edinburgh_bw.jpg");
	const edinburgh_pixelized = await Jimp.read("edinburgh_pixelized.jpg");
	const edinburgh_small = await Jimp.read("edinburgh_small.jpg");
	const london = await Jimp.read("london.jpg");

	console.log("Images compared to edinburgh_original.jpg\n=========================================");
	console.log(`hash (base 64) ${edinburgh_original.hash()}`);
	console.log(`hash (binary)  ${edinburgh_original.hash(2)}\n`);

	console.log("edinburgh_sharpened.jpg\n=======================");
	console.log(`hash (base 64) ${edinburgh_sharpened.hash()}`);
	console.log(`hash (binary)  ${edinburgh_sharpened.hash(2)}`);
	console.log(`distance       ${Jimp.distance(edinburgh_original, edinburgh_sharpened)}`);
	console.log(`diff.percent   ${Jimp.diff(edinburgh_original, edinburgh_sharpened).percent}\n`);

	console.log("edinburgh_bw.jpg\n================");
	console.log(`hash (base 64) ${edinburgh_bw.hash()}`);
	console.log(`hash (binary)  ${edinburgh_bw.hash(2)}`);
	console.log(`distance       ${Jimp.distance(edinburgh_original, edinburgh_bw)}`);
	console.log(`diff.percent   ${Jimp.diff(edinburgh_original, edinburgh_bw).percent}\n`);

	console.log("edinburgh_pixelized.jpg\n=======================");
	console.log(`hash (base 64) ${edinburgh_pixelized.hash()}`);
	console.log(`hash (binary)  ${edinburgh_pixelized.hash(2)}`);
	console.log(`distance       ${Jimp.distance(edinburgh_original, edinburgh_pixelized)}`);
	console.log(`diff.percent   ${Jimp.diff(edinburgh_original, edinburgh_pixelized).percent}\n`);

	console.log("edinburgh_small.jpg\n===================");
	console.log(`hash (base 64) ${edinburgh_small.hash()}`);
	console.log(`hash (binary)  ${edinburgh_small.hash(2)}`);
	console.log(`distance       ${Jimp.distance(edinburgh_original, edinburgh_small)}`);
	console.log(`diff.percent   ${Jimp.diff(edinburgh_original, edinburgh_small).percent}\n`);

	console.log("london.jpg\n==========");
	console.log(`hash (base 64) ${london.hash()}`);
	console.log(`hash (binary)  ${london.hash(2)}`);
	console.log(`distance       ${Jimp.distance(edinburgh_original, london)}`);
	console.log(`diff.percent   ${Jimp.diff(edinburgh_original, london).percent}\n`);
}
