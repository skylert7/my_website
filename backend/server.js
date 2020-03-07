var express = require('express');
var app = express();
var path = require('path');
var cors = require('cors');
var nodemailer = require('nodemailer');
const https = require('https');
const fs = require('fs');

app.use(cors());

var bodyParser = require('body-parser');


process.env.SECRET_KEY = 'secret'

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
var sess = {
	secret: 'secret',
	resave: true,
	saveUninitialized: true,
	cookie  : { maxAge  :  86400 * 1000}
}

const config = {
  port: 4000,
  host: '0.0.0.0'
};

app.get('/', (req, res) => {
  res.status(200).send('Connected');
});

//--------------------- Send email --------------------------

app.post('/sendEmail', (req, res) => {
	console.log(req.body)
	console.log(req.params)
	let transporter = nodemailer.createTransport({
	    host: 'smtp.gmail.com',
	    port: 587,
	    secure: false,
	    requireTLS: true,
	    auth: {
	        user: 'skyler.linhtran@gmail.com',
	        pass: 'skyler1996'
	    }
	});

	var mailOptions = {
	  from: '"Skyler Tran" <skyler.linhtran@gmail.com>',
	  to: 'skylert@smu.edu',
	  subject: 'Someone Sent You A Comment On Your Website',
	  text: JSON.stringify(req.body)
	};

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
			res.status(200).send('Email sent.');
    }
  });
});

//-------------------------- TicTacToe --------------------------
// Receives move from frontend
app.post('/tttSendMove', (req, res) => {
	let board = req.body.board
	let move = req.body.move
	board[move] = 1
	let toReturn = {board: board}
	res.send(toReturn)
})

// Sends opponent move to frontend
app.post('/tttGetOpponentMove', (req, res) => {
	let board = req.body.board
	nextMoveFromOpponent(board)
	let toReturn = {board: ""}

	setTimeout(function () {
		fs.readFile('./movesMade.txt', "utf8", (err, data) => {
						if (err) throw err;
						let aBoard = data.split(',');
						for (var i = 0; i < aBoard.length; i++) {
							aBoard[i] = parseInt(aBoard[i])
						}
						toReturn.board = aBoard
						res.send(toReturn)
					});
	}, 1000);

})

app.post('/tttGetWinner', (req, res) => {
	let board = req.body.board
	winner = tttGetWinner(board)
	let toReturn = {winner: winner}  //1 is X, -1 is O, "None" is TIE

	if (winner == -1 || winner == 1 || winner == "None")
		res.send(toReturn)

	res.send("Moveable")

})


//---------------------------------------------------------------------------------
https.createServer({
	key: fs.readFileSync('./ssl_for_my_website/private.key'),
	cert: fs.readFileSync('./ssl_for_my_website/certificate.crt'),
	ca: fs.readFileSync('./ssl_for_my_website/ca_bundle.crt')
},app).listen(config.port, config.host);

// app.listen(config.port, config.host, (e) => {
//   if (e) {
//     throw new Error('Internal Server Error');
//   }
// 	else{
// 		console.log('Server running on port ', config.port)
// 	}
// });







////--------------------------------------------------------------------------------- Normal functions
async function nextMoveFromOpponent(board){
  //Change to "python3" from "python" to run on Linux
	let child_process = require("child_process")
	let returnBoard = []
  await child_process.exec(`python ./minimax1.py "${board}"`,
                          function (error, stdout, stderr) {

			console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('exec error: ' + error);
      }

		});

  return
}

function tttGetWinner(b){
	    // param board:
	    // return: 1 or -1 or None :if no winner
			console.log(Object.values(b))
	    //------------------- X -------------------
	    //Horizontal
	    if (b[0] == b[1] && b[0] == b[2] && b[1] == b[2]){
				if (b[0] == -1)
					return b[0]
			}
	    if (b[3] == b[4] && b[3] == b[5] && b[4] == b[5]){
				if (b[3] == -1)
					return b[3]
			}
	    if (b[6] == b[7] && b[6] == b[8] && b[7] == b[8]){
				if (b[6] == -1)
					return b[6]
			}

	    //Diagonal
	    if (b[0] == b[0 + 4] && b[0] == b[0 + 8] && b[0 + 4] == b[0 + 8]){
				if (b[0] == -1)
					return b[0]
			}
	    if (b[2] == b[2 + 2] && b[2 + 2] == b[2 + 4] && b[2] == b[2 + 4]){
				if (b[2] == -1)
					return b[2]
			}

	    //Vertical
	    if (b[0] == b[0 + 3] && b[0] == b[0 + 6] && b[0 + 3]== b[0 + 6]){
				if (b[0] == -1)
					return b[0]
			}
	    if (b[1] == b[1 + 3] && b[1 + 3] == b[1 + 6] && b[1] == b[1 + 6]){
				if (b[1] == -1)
					return b[1]
			}
	    if (b[2] == b[2 + 3] && b[2] == b[2 + 6] && b[2 + 3] == b[2 + 6]){
				if (b[2] == -1)
					return b[2]
			}

	    // ------------------- O -------------------
	    // Horizontal
			if (b[0] == b[1] && b[0] == b[2] && b[1] == b[2]){
				if (b[0] == 1)
					return b[0]
			}
	    if (b[3] == b[4] && b[3] == b[5] && b[4] == b[5]){
				if (b[3] == 1)
					return b[3]
			}
	    if (b[6] == b[7] && b[6] == b[8] && b[7] == b[8]){
				if (b[6] == 1)
					return b[6]
			}

	    //Diagonal
	    if (b[0] == b[0 + 4] && b[0] == b[0 + 8] && b[0 + 4] == b[0 + 8]){
				if (b[0] == 1)
					return b[0]
			}
	    if (b[2] == b[2 + 2] && b[2 + 2] == b[2 + 4] && b[2] == b[2 + 4]){
				if (b[2] == 1)
					return b[2]
			}

	    //Vertical
	    if (b[0] == b[0 + 3] && b[0] == b[0 + 6] && b[0 + 3]== b[0 + 6]){
				if (b[0] == 1)
					return b[0]
			}
	    if (b[1] == b[1 + 3] && b[1 + 3] == b[1 + 6] && b[1] == b[1 + 6]){
				if (b[1] == 1)
					return b[1]
			}
	    if (b[2] == b[2 + 3] && b[2] == b[2 + 6] && b[2 + 3] == b[2 + 6]){
				if (b[2] == 1)
					return b[2]
			}

	    //------------------- Tie -------------------
			var b_string = JSON.stringify(b)
	    if (!b_string.includes("0")){
				console.log(b_string.includes("0"))
				return "None"
			}

}
