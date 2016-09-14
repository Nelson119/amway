'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, $ */

app.partial.travel = function () {

	$('.travel .cls').on('click', function () {
		var travel = $(this).parents('.travel');
		var perc = $('figure', travel).attr('data-complete-percent') * 1;

		if (!travel.hasClass('on')) {
			travel.addClass('on').siblings().removeClass('on');
			$('figcaption span:eq(1)', travel).html(perc);
			$('svg circle', travel).css('stroke-dashoffset', perc);
			$('svg circle', travel.siblings()).css('stroke-dashoffset', 0);
		} else {
			travel.removeClass('on');
			$('svg circle', travel).css('stroke-dashoffset', 0);
			$('figcaption span:eq(1)', travel).html(0);
		}
	});

	var on = extractUrlValue('on');
	if (on == 'new') {
		$('.travel.new-protocol .cls').trigger('click');
		$('.travel.origin-protocol').addClass('hide');
	} else if (on == 'old') {
		$('.travel.origin-protocol .cls').trigger('click');
	}
};

function extractUrlValue(key, url) {
	if (typeof url === 'undefined') {
		url = window.location.href;
	}
	var match = url.match('[?&]' + key + '=([^&]+)');
	return match ? match[1] : null;
}
//# sourceMappingURL=travel.js.map
