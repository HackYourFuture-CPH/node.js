let addToState = function(res) {
		res.setHeader('Content-Type', 'text/html')
		res.write(`
			<!html>
			<html>
				<head>
					<title>Addition</title>
					<style>
					body {
						background: lightblue;
						font-size: 30px;
						text-align: center;
					}
					div {
						background: #eee;
						font-size: 30px;
						text-align: center;
						margin: 100px 200px;
						padding: 20px;
						border: 1px solid black;
						border-radius: 20px;
					}
					#result {
						background: #eee;
						font-size: 30px;
						text-align: center;
						margin: 100px 500px;
						padding: 20px;
						border: 1px solid black;
						border-radius: 20px;
					}
					button {
						width: 80px;
						hight: 50px;
					}
					</style>
				</head>
				<body>
				<div>
					<p>Press the button to remove - 1 - from the current state : </p>
					</div>
					<button onclick="addState()">add</button>
					<div id="result"></div>

					<script type="text/javascript">
					var state = 10;
					function addState() {
						state ++;
						document.getElementById("result").innerHTML = state;
					}
					</script>
					
					<!--<script type="text/javascript" src="main.js"></script>-->
			
				</body>
			</html>
		`)
	}
	
	 module.exports = addToState;

	 