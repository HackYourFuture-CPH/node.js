import * as http from "http";
import * as fs from "fs";
// querystring is used to parse url parameters to an object
// also a core module
import * as qs from "querystring";
import express from "express";
import bodyParser from "body-parser";

import { Contact, ContactList } from"./ContactList.js";

let contacts = new ContactList("./src/contacts.json");
const port = 8080;

const app = express();
app.listen(port, () => {
	console.log(`Server started at port ${ port }`);
});

app.use((req, res, next) => {
	console.log(req.method, req.url);
	next();
});

app.use("/public", express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use((req, res, next) => {
// 	console.log("Second middleware");
// 	if(req.url === "/")
// 		console.log("Index request");
// 	next();
// });

app.get("/", (req, res) => {
	// console.log("get 1");
	res.send("This is the webserver index.");
});

// Show all the contacts
app.post("/contacts", (req, res) => {
	// console.log("post 2");
	const obj = req.body;
	console.log(`Incoming user: ${ JSON.stringify(obj) }`);

	let contact;
	try{
		contact = new Contact(obj);
	}
	catch(err){
		return res.status(401).send(err);
	}

	return contacts.load()
	.then(() => {
		contacts.addContact(contact);
		contacts.save();
	})
	.then(() => {
		res
		.status(201)
		.json(contact);
	})
	.catch((err) => {
		res.status(500).send(err);
	})
});

// show all the contacts
app.get('/contacts', (req, res) => {
	return contacts.load()
	.then(()=> {
		console.log(contacts);
		// console.log(contacts["list"]);

		res.json(contacts.list);
	})
	.catch(err => {
		console.log(err);
		res.statusCode = 500;
		res.send("Internal server error");
	});
});

app.get('/contacts/:id', (req, res) => {
	const id = req.params.id;
	return contacts.load()
	.then(() =>{
		res.json(contacts.list[id - 1]);
	})
	.catch(res.err);
});

app.put('/contacts/:id', (req, res) => {
	const id = req.params.id;
	const body = req.body;

	// if(typeof id !== "number")
	// 	throw "Contact.id needs to be a number";

	if(id < 1 || id > contacts.list.length)
		res.status(404).send("Contact with this id not found.");

	return contacts.load()
	.then(() =>{
		contacts.list[id - 1] = body;
		return contacts.save();
	})
	.then(() => {
		res.json(contacts.list[id - 1]);
	})
	.catch(res.err)
})

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