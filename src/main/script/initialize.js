require.config({
	paths: {
		// tools
		// for require-cs
		'cs': '../vendor/script/cs',
		'CoffeeScript': '../vendor/script/CoffeeScript',
		
		// for require-handlebars
		'hbs': '../vendor/script/hbs',
		'Handlebars' : '../vendor/script/Handlebars',
		// './hbs/underscore': '../vendor/script/underscore-1.3.3',

		// libs
		'jquery': '../vendor/script/jquery-1.7.2',
		'underscore': '../vendor/script/underscore-1.3.3',
		'backbone': '../vendor/script/backbone-0.9.2',
		'handlebars': '../vendor/script/Handlebars',
		'foundation': '../vendor/script/foundation',
		'chaplin': '../vendor/script/chaplin'
	},
	
	
	
	shim: {
		'backbone': ['underscore', 'jquery'],
		'foundation': ['jquery']
	},
	
    hbs : {
        templateExtension : 'hbs',
        // if disableI18n is `true` it won't load locales and the i18n helper
        // won't work as well.
        disableI18n : true
    }
});

// require(['jquery',	'underscore',	'backbone',		'handlebars',	'cs!application', 'foundation'],
// function($,			_,				Backbone,		Handlebars,		app) {
// 	console.log('test');
// });


require(['jquery',	'underscore',	'foundation', 'hbs!template/test'],
	function($,			_,		foundation,	 test) {
		console.log('test');
		var container = document.getElementById('demo-app-container');
		// Run your template function, and inject it.
		  container.innerHTML = test({
		    name : 'HPUI'
		  });

});