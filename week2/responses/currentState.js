export default function currentState(res) {
	res.setHeader('Content-Type', 'text/html')
	res.write(`
	<!html>
	<html>
	<head>
	<title>state</title>
	 <style>
	 body {
		 background: pink;
		 font-size: 30px;
		 text-align: center;
	 }
	 p {
		 background: #eee;
		 font-size: 30px;
		 text-align: center;
		 margin: 100px 200px;
		 padding: 20px;
		 border: 1px solid black;
		 border-radius: 20px;
	 }
	 </style>
</head>
<body>
	<p>state</p>
</body>
	</html>
`)
res.end('10')
}