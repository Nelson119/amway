'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global  $, app */
var secName = 'forget-password';
app.partial[secName] = function(global){
	// console.log('index initialized');

	var authorize = global.authorize, 
		message = global.message, 
		method = global.method, 
		debug = global.debug, 
		dayOfMonth = global.dayOfMonth;

	window.freeze = true;

	(function(){
		var src = $('header h1 a img').attr('src');
		$.get(src, function(response){
			$('header h1 a').html($('svg', response));
		});



		//下拉選單
		if($('.forget-form').length){

			$('select[name=birthday]').eq(0).on('change', function(e){
				var pick = $('select[name=birthday]').eq(1).find('option').clone();
				pick.eq(0).siblings().attr('selected', null);
				pick.eq(0).attr('selected', 'selected');
				$('select[name=birthday]').eq(1).find('option').remove();
				$('select[name=birthday]').eq(1).append(pick);
				
				pick = $('select[name=birthday]').eq(2).find('option').clone();
				pick.eq(0).siblings().attr('selected', null);
				pick.eq(0).attr('selected', 'selected');
				$('select[name=birthday]').eq(2).find('option').remove();
				$('select[name=birthday]').eq(2).append(pick);
			});

			$('select[name=birthday]').eq(1).on('change', function(e){
				var pick = $('select[name=birthday]').eq(2).find('option').clone();
				pick.eq(0).siblings().attr('selected', null);
				pick.eq(0).attr('selected', 'selected');
				$('select[name=birthday]').eq(2).find('option').remove();
				$('select[name=birthday]').eq(2).append(pick);

				var index = $('select[name=birthday]').eq(1).find('option:selected').val() - 1;
				var days = dayOfMonth[index];

				$('select[name=birthday]').eq(2).find('option').removeClass('hide');
				$('select[name=birthday]').eq(2).find('option:gt('+days+')').addClass('hide');

			});
		}

	}());
};
