'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, $, moment */

app.partial.bonus = function () {

	//今天日期物件 使用momentjs日期工具
	var today = moment();

	//月份下拉選項：往前推13個月
	//十日以前算上上個月
	today.add(-10, 'day');
	for (var i = 0; i < 13; i++) {
		today.add(-1, 'month');
		var month = today.month() + 1;
		var str = today.year() + '年' + month + '月';
		var val = today.year() + ',' + month;
		var opt = document.createElement('option');
		$(opt).val(val).html(str);
		$('[name=month]').append(opt);
	}

	//取得月份資料
	$('.bonus.monthly select[name=month]').on('change', function () {
		if (!$('.bonus.monthly select[name=month]').val()) {
			$('.bonus.monthly .detail .result').addClass('hide').removeClass('in');
			$('.bonus.monthly .detail .notfound').removeClass('hide');
			setTimeout(function () {
				$('.bonus.monthly .detail .notfound').addClass('in');
			}, 200);
			return false;
		}
		var month = $('.bonus.monthly select[name=month]').val(); // ex: '2016,1' , '2015,10'
		$.ajax({
			url: month + '.json',
			//mapping 月份獎金欄位
			success: function success(r) {
				$.each(r, function (i, d) {
					$('.bonus.monthly [data-field=' + i + ']').html(d);
				});
				$('.bonus.monthly .detail .notfound').addClass('hide').removeClass('in');
				$('.bonus.monthly .detail .result').removeClass('hide');
				setTimeout(function () {
					$('.bonus.monthly .detail .result').addClass('in');
				}, 200);
			},
			//找不到資料 顯示無資料
			error: function error(er) {
				$('.bonus.monthly .detail .result').addClass('hide').removeClass('in');
				$('.bonus.monthly .detail .notfound').removeClass('hide');
				setTimeout(function () {
					$('.bonus.monthly .detail .notfound').addClass('in');
				}, 200);
			}
		});
	}).trigger('change');

	//取得月份資料
	$('.bonus.yearly select[name=category]').on('change', function () {
		if (!$('.bonus.yearly select[name=category]').val()) {
			$('.bonus.yearly .detail .result').addClass('hide').removeClass('in');
			$('.bonus.yearly .detail .notfound').removeClass('hide');
			setTimeout(function () {
				$('.bonus.yearly .detail .notfound').addClass('in');
			}, 200);
			return false;
		}
		var cat = $('.bonus.yearly select[name=category]').val(); // ex: '2016,1' , '2015,10'
		$.ajax({
			url: cat + '.json',
			//mapping 月份獎金欄位
			success: function success(r) {
				$.each(r, function (i, d) {
					$('.bonus.yearly [data-field=' + i + ']').html(d);
				});
				$('.bonus.yearly .detail .notfound').addClass('hide').removeClass('in');
				$('.bonus.yearly .detail .result').removeClass('hide');
				setTimeout(function () {
					$('.bonus.yearly .detail .result').addClass('in');
				}, 200);
			},
			//找不到資料 顯示無資料
			error: function error(er) {
				$('.bonus.yearly .detail .result').addClass('hide').removeClass('in');
				$('.bonus.yearly .detail .notfound').removeClass('hide');
				setTimeout(function () {
					$('.bonus.yearly .detail .notfound').addClass('in');
				}, 200);
			}
		});
	}).trigger('change');
};
//# sourceMappingURL=bonus.js.map