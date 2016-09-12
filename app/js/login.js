'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global  $, app, TweenMax */
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
            // app.global.message.confirm({
            //     content: '您的直銷商/生活會員權利已到期，提醒您可以於線上完成續約以保障相關權益。欲辦理續約<br>請點選「續約」。',
            //     confirm: '續約',
            //     cancel: '取消'
            // }, function () {
            //     setTimeout(function () { location.href = 'renew.aspx'; }, 100);
            // });
    //進場動態
	TweenMax.to('header h1', 1, {
		opacity: 1,
		marginTop: 0,
		delay: 0.5
	});
    TweenMax.to('header', 1.2, {
		height: $('header h1').outerHeight(),
		delay: 1
	});
    TweenMax.to('.login form, .login footer', 1.2, {
    	marginTop: 0,
    	opacity: 1,
		delay: 1.5
	});

    //amcard 蓋版
	(function(){
		// var cookieName = 'showMobileWebOverlayBanner';

		// if($.cookie(cookieName)){
		// 	$.cookie(cookieName, 'true', { path: './', expires: 7 });
		// 	return;
		// }else{
			$('.overlay-banner').removeClass('hide');
			setTimeout(function(){
				$('.overlay-banner').addClass('in');
			}, 200);
		// 	$.cookie(cookieName, 'true', { path: './', expires: 7 });
		// }
		$('.exit').on('click', function(){ $('.overlay-banner').addClass('hide');});
	}());
};
//進場動態初始化
TweenMax.set('header',{
	transfromOrigin: '0 0 50px',
	'-webkit-backface-visibility': 'hidden',
	height: '50vh'
});
TweenMax.set('header h1',{
	transfromOrigin: '0 0 50px',
	'-webkit-backface-visibility': 'hidden',
	marginTop: '2vh',
	opacity: 0
});
TweenMax.set('.login form, .login footer',{
	transfromOrigin: '0 0 50px',
	'-webkit-backface-visibility': 'hidden',
	marginTop: '2vh',
	opacity: 0
});


