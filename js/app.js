'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global  $ */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var app = {};
// 全域使用的物件
app.global = {};
app.partial = {};
app.module = {};

// 網址為 gulp 或者 github 時 設定成debug 模式
var debug = /localhost[:]9000|nelson119.github.io/.test(location.href);

$(function () {
    // 定義每個section
    $.each(app.partial, function (name, init) {
        init();
    });

    //觸發第一次調整頁面尺寸
    $(window).trigger('resize');

    $('.burger').on('click', function () {
        $('header nav').toggleClass('on');
        $('header .menu-overlay').toggleClass('hide');
    });
    $('header .menu-overlay').on('click', function () {
        $('header nav').removeClass('on');
        $('header .menu-overlay').addClass('hide');
    });
});

//判斷是否具有屬性
$.fn.hasAttr = function (attributeName) {
    var attr = $(this).attr(attributeName);
    if ((typeof attr === 'undefined' ? 'undefined' : _typeof(attr)) !== (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined)) && attr !== false) {
        return true;
    } else {
        return false;
    }
};

var message = {};

message.confirm = function (msg, callback) {
    $('#confirm .text').html(msg.content);
    $('#confirm').css('z-index', '100').removeClass('hide').addClass('in');
    $('#btnMessageConfirm').html(msg.confirm).unbind('click').on('click', function () {

        callback();
        $('#confirm').removeClass('in');
        setTimeout(function () {
            $('#confirm').addClass('hide');
        }, 300);
    });
    $('#btnMessageCancel').html(msg.cancel).unbind('click').on('click', function () {
        $('#confirm').removeClass('in');
        setTimeout(function () {
            $('#confirm').addClass('hide');
        }, 300);
    });
};
app.global.message = message;
var global = app.global;

window.viewportUnitsBuggyfill.init({

    // milliseconds to delay between updates of viewport-units
    // caused by orientationchange, pageshow, resize events
    refreshDebounceWait: 250,

    // provide hacks plugin to make the contentHack property work correctly.
    hacks: window.viewportUnitsBuggyfillHacks

});
//# sourceMappingURL=app.js.map
