## The application bootstrapper.
#Application =
#	initialize: ->
#		
#		
#		
#		
#		Router = require 'lib/router'
#
#		# Instantiate the router
#		@router = new Router()
#		# Freeze the object
#		Object.freeze? this
#
#module.exports = Application
define [
	'jquery'
	'underscore'
	'backbone'
 	'cs!chaplin'
], ($, _, Backbone, chaplin) ->
	
	class MyApplication
		initialize: ->
			console.log 'in MyApplication'
	
	Object.freeze? this