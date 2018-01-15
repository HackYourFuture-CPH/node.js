// const testImport = require("./test-import.js");

// console.log(testImport.x);
// console.log("Here's it working.");

const fs = require("fs");
// console.log(fs);

// const readme = fs.readFileSync("readme.txt", "utf8");
// console.log(readme);

// fs.readFile("readme-2.txt", "utf8", (err, data) => {
// 	if(err) console.log(err);
// 	// console.log(data);
// 	console.log("readme-2 read");
// });

// fs.readFile("readme.txt", "utf8", (err, data) => {
// 	if(err) console.log(err);
// 	// console.log(data);
// 	console.log("readme read");
// });

// const p1 = new Promise((resolve, reject) => {
// 	fs.readFile("readme-2.txt", "utf8", (err, data) => {
// 		if(err) reject(err);
// 		console.log("readme-2 read");
// 		resolve("readme-2 read");
// 	});
// });

// const p2 = new Promise((resolve, reject) => {
// 	fs.readFile("readme.txt", "utf8", (err, data) => {
// 		if(err) reject(err);
// 		console.log("readme read");
// 		resolve("readme read");
// 	});
// });

const util = require("util");
const readFilePromise = util.promisify(fs.readFile);

const p1 = readFilePromise("readme-2.txt", "utf8");
const p2 = readFilePromise("readme.txt", "utf8");

Promise.all([p1, p2])
.then(results => {
	console.log(results[1]);
	console.log("Both files have been read");
})

p1.then(() => {
	console.log('readme-2 read');
});

console.log("Next line of code");