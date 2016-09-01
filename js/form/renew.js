'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global  $, app */

app.partial.login = function () {
	// console.log('index initialized');

	var authorize = global.authorize,
	    message = global.message,
	    method = global.method,
	    debug = global.debug,
	    dayOfMonth = global.dayOfMonth;

	window.freeze = true;

	// global.loading.on();
	// global.loading.off();

	(function () {
		var src = $('header h1 a img').attr('src');
		$.get(src, function (response) {
			$('header h1 a').html($('svg', response));
		});
	})();

	//選擇卡類型後 顯示填寫卡號的部分
	$('[name=paytype]').on('click change', function () {
		$('#cardInfo').addClass('in');
	});

	//填寫卡號後 顯示填寫背後三碼的部分
	$('[name=card],[name=month],[name=year]').on('input change', function () {
		if ($('[name=card]').val() && $('[name=year]').val() && $('[name=month]').val()) {
			$('#cardInfoDetail').addClass('in');
		}
	});
	//填寫卡號後 顯示送出按鈕
	$('[name=cardback]').on('input change', function () {
		if ($('[name=cardback]').val()) {
			$('#submit').addClass('in');
		}
	});
	//送出後確認畫面
	$('#submit').on('click', function () {
		app.global.message.confirm({
			content: '您將送出續約資訊<br>是否確定付款?',
			confirm: '確定',
			cancel: '取消'
		}, function () {
			// 確定後送出資料


			// setTimeout(function () { location.href = 'renew.aspx'; }, 100);
		});

		return false;
	});
};
//# sourceMappingURL=renew.js.map
