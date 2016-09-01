'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global  $, app */
app.partial.login = function(){
	// console.log('index initialized');

	var authorize = global.authorize, 
		message = global.message, 
		method = global.method, 
		debug = global.debug, 
		dayOfMonth = global.dayOfMonth;

	window.freeze = true;

	// global.loading.on();
	// global.loading.off();

	(function(){
		var src = $('header h1 a img').attr('src');
		$.get(src, function(response){
			$('header h1 a').html($('svg', response));
		});


	}());
};
