let sendText = function (res, text) {
	res.setHeader('Content-Type', 'text/plain')
	res.write(text)
}

module.exports = sendText;