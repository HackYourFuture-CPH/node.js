"use strict";

var _http = require("http");

var http = _interopRequireWildcard(_http);

var _fs = require("fs");

var fs = _interopRequireWildcard(_fs);

var _querystring = require("querystring");

var qs = _interopRequireWildcard(_querystring);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _ContactList = require("./ContactList.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// querystring is used to parse url parameters to an object
// also a core module
var contacts = new _ContactList.ContactList("./src/contacts.json");
var port = 8080;

var app = (0, _express2.default)();
app.listen(port, function () {
	console.log("Server started at port " + port);
});

app.use(function (req, res, next) {
	console.log(req.method, req.url);
	next();
});

app.use("/public", _express2.default.static('public'));
app.use(_bodyParser2.default.urlencoded({ extended: true }));

// app.use((req, res, next) => {
// 	console.log("Second middleware");
// 	if(req.url === "/")
// 		console.log("Index request");
// 	next();
// });

app.get("/", function (req, res) {
	// console.log("get 1");
	res.send("This is the webserver index.");
});

app.post("/add-contact", function (req, res) {
	// console.log("post 2");
	var obj = req.body;
	console.log("Incoming user: " + JSON.stringify(obj));

	var contact = void 0;
	try {
		contact = new _ContactList.Contact(obj);
	} catch (err) {
		return res.status(401).send(err);
	}

	return contacts.load().then(function () {
		contacts.addContact(contact);
		contacts.save();
	}).then(function () {
		res.write("Successfully saved contact: " + contact.name);
		res.end();
	}).catch(function (err) {
		res.status(500).send(err);
	});
});

// http
// .createServer((req, res) => {
// 	// log the incoming request
// 	console.log(req.method, req.url);

// 	if(req.url === '/'){
// 		res.write("This is the webserver index.")
// 		return res.end();
// 	}

// 	if(req.url === '/add-contact' && req.method === 'POST'){
// 		let body = "";
// 		req.on("data", chunk => {
// 	        body += chunk;
// 	    });

// 	    req.on("end", () => {
// 	    	console.log("Received params:", qs.parse(body));
// 	    	const obj = qs.parse(body);

// 	    	let contact;
// 	    	try{
// 				contact = new Contact(obj);
// 	    	}
// 	    	catch(err){
// 	    		console.log(err);
// 	    		res.statusCode = 401;
// 	    		res.write(err);
// 	    		return res.end();
// 	    	}

// 			return contacts.load()
// 			.then(() => {
// 				contacts.addContact(contact);
// 				contacts.save();
// 			})
// 			.then(() => {
// 				res.write(`Successfully saved contact: ${ contact.name }`);
// 				res.end();
// 			})
// 			.catch((err) => {
// 				console.log("Error saving contact:", err);
// 				res.statusCode = 500;
// 				res.write("Error saving contact.");
// 				res.end();
// 			})
// 	    });
// 	} 
// 	else if(req.url === '/all-contacts'){
// 		return contacts.load()
// 		.then(()=> {
// 			console.log(contacts);
// 			// console.log(contacts["list"]);

// 			res.write(JSON.stringify(contacts.list));

// 			res.end();
// 		})
// 		.catch(err => {
// 			console.log(err);
// 			res.statusCode = 500;
// 			res.write("Internal server error");
// 			res.end();
// 		});
// 	}
// 	else
// 	// if none the urls above match, search for file in public folder
// 		fs.readFile(`./public${ req.url }`, "utf8", (err, data) => {
// 			if(err){
// 				console.log("Error reading file:", err);
// 				res.statusCode = 404;
// 				res.write("File not found.");
// 				return res.end();
// 			}
// 			// console.log("Data:", data);
// 			res.write(data);
// 			res.end();
// 		});
// })
// .listen(8080);
//# sourceMappingURL=index.js.map