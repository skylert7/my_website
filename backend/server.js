var express = require('express');
var app = express();
var path = require('path');
const port = process.env.PORT || 4000;
var cors = require('cors');
var nodemailer = require('nodemailer');


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

//--------------------- Send email --------------------------

app.post('/sendEmail', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'skyler_linhtran@gmail.com',
      pass: 'skyler1996'
    }
  });

  var mailOptions = {
    from: 'skyler_linhtran@gmail.com',
    to: 'skylert@smu.edu',
    subject: 'Sending to local authorities from node',
    text: 'That was easy!'
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
app.listen(port, () => {
	console.log("Server is running on port: " + port)
})
