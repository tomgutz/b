require.config({
	paths: {
		// tools
		// for require-cs
		cs: '../vendor/script/cs',
		CoffeeScript: '../vendor/script/CoffeeScript',
		// for require-handlebars
		'hbs': '../vendor/script/hbs',
		'Handlebars' : '../vendor/script/Handlebars',
		'./hbs/underscore': '../vendor/script/handlebars',
		'./hbs': '../vendor/script/hbs',
		// libs
		jquery: '../vendor/script/jquery-1.7.2',
		underscore: '../vendor/script/underscore-1.3.3',
		backbone: '../vendor/script/backbone-0.9.2',
		handlebars: '../vendor/script/handlebars',
		foundation: '../vendor/script/foundation',
		chaplin: '../vendor/script/chaplin'
	},
	
    hbs : {
        templateExtension : 'hbs',
        // if disableI18n is `true` it won't load locales and the i18n helper
        // won't work as well.
        disableI18n : false
    }
});

require(['jquery',	'underscore',	'backbone',		'handlebars',	'cs!application', 'foundation'],
function($,			_,				Backbone,		Handlebars,		app) {
	console.log('test');
});
