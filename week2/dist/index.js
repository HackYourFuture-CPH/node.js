const HTTP =require('http');
const Path =require('path');

const currentState =require('./responses/currentState');
const addToState =require('./responses/addToState');
const sendText =require('./responses/sendText');
const removeFromState =require('./responses/removeFromState');
const resetState =require('./responses/resetState');

const server = HTTP.createServer(function(req, res) {
	console.log(req.method, req.url)

	switch (req.url) {

		case '/' || '/state':
	currentState(res)
		break

	case '/add':
	addToState(res)
		break

		case '/remove':
		removeFromState(res)
		break

		case '/reset':
		resetState(res)
		break
		
	default:

		res.writeHead(404,{'content-Type':'text/html'})
		res.write('Not Found!')
	}
	
	res.end()
})

server.listen(8080)

console.log('Server started')

