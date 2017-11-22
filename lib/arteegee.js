var express = require('express')

var app = express()

app.use(express.static('./public'))

app.set('view engine', 'jade')
app.set('views', './views')

app.route('/')
.get(function(req, res) {
	res.render('layout')
})

app.route('/video')
.get(function(req, res) {
	res.render('video')
})


var port = process.env.PORT || 8888;


//process.env.PORT
var srv = app.listen(port, function() {
	console.log('Listening on '+port)
})

app.use('/peerjs', require('peer').ExpressPeerServer(srv, {
	debug: true
}))
