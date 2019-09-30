var express = require('express');
var app = express();
var path = require('path');
/*
var cors = require('cors');
var bodyParser = require('body-parser');


process.env.SECRET_KEY = 'secret'
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
var sess = {
	secret: 'secret',
	resave: true,
	saveUninitialized: true,
	cookie  : { maxAge  :  86400 * 1000}
}*/
app.use(express.static(__dirname + '/public'));

//------------------------------------------------------------------------ Homepage -----------------------------------------------------------------------

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, './public', 'index.html'));
});

//---------------------------------------------------------------------------------
app.listen(port, () => {
	console.log("Server is running on port: " + port)
})
