export default function sendText(res, text) {
	res.setHeader('Content-Type', 'text/plain')
	res.write(text)
}