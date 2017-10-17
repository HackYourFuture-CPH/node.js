import HTTP from 'http'
import Path from 'path'

import currentState from './responses/currentState'
import addToState from './responses/addToState'
import sendStylesCSS from './responses/sendStylesCSS'
import sendText from './responses/sendText'


const server = HTTP.createServer((req, res) => {
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
