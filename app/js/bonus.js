'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, $ */
app.partial.bonus = function(){

	//取得月份資料
	$('.bonus.monthly select[name=month]').on('change', function(){
		if(!$('.bonus.monthly select[name=month]').val()){
			$('.bonus.monthly .detail .result').addClass('hide').removeClass('in');
			$('.bonus.monthly .detail .notfound').removeClass('hide');
			setTimeout(function(){
				$('.bonus.monthly .detail .notfound').addClass('in');
			}, 200);
			return false;
		}
		var month = $('.bonus.monthly select[name=month]').val(); // ex: '2016,1' , '2015,10'
		$.ajax({
			url: month+'.json',
			//mapping 月份獎金欄位
			success: function(r){
				$.each(r, function(i, d){
					$('.bonus.monthly [data-field=' + i + ']').html(d);
				});
				$('.bonus.monthly .detail .notfound').addClass('hide').removeClass('in');
				$('.bonus.monthly .detail .result').removeClass('hide');
				setTimeout(function(){
					$('.bonus.monthly .detail .result').addClass('in');
				}, 200);
			},
			//找不到資料 顯示無資料
			error: function(er){
				$('.bonus.monthly .detail .result').addClass('hide').removeClass('in');
				$('.bonus.monthly .detail .notfound').removeClass('hide');
				setTimeout(function(){
					$('.bonus.monthly .detail .notfound').addClass('in');
				}, 200);
			}
		});
	}).trigger('change');


	//取得月份資料
	$('.bonus.yearly select[name=category]').on('change', function(){
		if(!$('.bonus.yearly select[name=category]').val()){
			$('.bonus.yearly .detail .result').addClass('hide').removeClass('in');
			$('.bonus.yearly .detail .notfound').removeClass('hide');
			setTimeout(function(){
				$('.bonus.yearly .detail .notfound').addClass('in');
			}, 200);
			return false;
		}
		var cat = $('.bonus.yearly select[name=category]').val(); // ex: '2016,1' , '2015,10'
		$.ajax({
			url: cat+'.json',
			//mapping 月份獎金欄位
			success: function(r){
				$.each(r, function(i, d){
					$('.bonus.yearly [data-field=' + i + ']').html(d);
				});
				$('.bonus.yearly .detail .notfound').addClass('hide').removeClass('in');
				$('.bonus.yearly .detail .result').removeClass('hide');
				setTimeout(function(){
					$('.bonus.yearly .detail .result').addClass('in');
				}, 200);
			},
			//找不到資料 顯示無資料
			error: function(er){
				$('.bonus.yearly .detail .result').addClass('hide').removeClass('in');
				$('.bonus.yearly .detail .notfound').removeClass('hide');
				setTimeout(function(){
					$('.bonus.yearly .detail .notfound').addClass('in');
				}, 200);
			}
		});
	}).trigger('change');
};

