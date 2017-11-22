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



//process.env.PORT
var srv = app.listen(8888, function() {
	console.log('Listening on '+8888)
})

app.use('/peerjs', require('peer').ExpressPeerServer(srv, {
	debug: true
}))
