require.config({
	paths: {
		// tools
		// for require-cs
		'cs': '../vendor/script/cs',
		'CoffeeScript': '../vendor/script/CoffeeScript',

		// for require-handlebars
		'hbs': '../vendor/script/hbs',
		'Handlebars': '../vendor/script/Handlebars',
		// This AMDfied underscore is exclusively for compiling handlebars plugin
		'hbs/underscore' : '../vendor/script/hbs/underscore-1.3.3-amd',

		// libs
		'jquery': '../vendor/script/jquery-1.7.2',
		'underscore': '../vendor/script/underscore-1.3.3',
		'backbone': '../vendor/script/backbone-0.9.2',
		'handlebars': '../vendor/script/Handlebars',
		'foundation': '../vendor/script/foundation',
		'i18next': '../vendor/script/i18next-1.3.1',
		'chaplin': '../vendor/script/chaplin'
	},

	shim: {
		'underscore': {
			exports: '_'
		},

		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'foundation': {
			deps: ['jquery']
		}
	},

	hbs: {
		templateExtension: 'hbs',
		disableI18n: true
	}
});


require(['jquery', 'underscore', 'foundation', 'hbs!template/test'], function($, _, foundation, test) {
	console.log('test');
	var container = document.getElementById('demo-app-container');
	// Run your template function, and inject it.
	container.innerHTML = test({
		name: 'Any'
	});
});