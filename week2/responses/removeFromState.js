export default function removeFromState(res) {
	res.setHeader('Content-Type', 'text/html')
	res.write(`
<!html>
<html>
    <head>
        <title>Remove</title>
        <style>
        body {
            background: lightgreen;
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
        #result2 {
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
        <button onclick="subState()">sub</button>
        <div id="result2"></div>

        <script type="text/javascript">
        var state = 10;	
        function subState() {
            state --;
            document.getElementById("result2").innerHTML = state;
        }
        </script>
        <!--<script type="text/javascript" src="main.js"></script>-->
    </body>
</html>
`)
}
