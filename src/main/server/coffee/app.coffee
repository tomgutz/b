express = require 'express'

app = express.createServer()

app.configure ->
	app.use express.methodOverride()
	app.use express.bodyParser()
	app.use app.router
	app.use express.static "#{__dirname}/../../"

app.listen 3000
console.log 'server started'
