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

app.get('/sendEmail', (req, res) => {
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
    from: 'skyler.linhtran@gmail.com',
    to: 'skylert@smu.edu',
    subject: 'Someone sent you a comment on your website',
    text: JSON.stringify(req.body)
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

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
