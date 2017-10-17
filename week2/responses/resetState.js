export default function resetState(res) {
	res.setHeader('Content-Type', 'text/html')
    res.write(`
    <!html>
    <html>
        <head>
            <title>set</title>
            <style>
            body {
                background: #985647;
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
            #result3 {
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
            <p>Press the button to set the state : </p>
            </div>
            <button onclick="setState()">set</button>
            <div id="result3"></div>

            <script type="text/javascript">
            var state = 10;	
            function setState() {
                state = 10;
                document.getElementById("result3").innerHTML = state;
            }
            </script>
            <!--<script type="text/javascript" src="main.js"></script>-->
        </body>
    </html>
`)
}