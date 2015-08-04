// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());;// Plugin: jQuery.fontFlex
// Source: github.com/nathco/jQuery.fontFlex
// Author: Nathan Rutzky
// Update: 1.0

(function($) {

    $.fn.fontFlex = function(min, max, mid) {

        var $this = this;

        $(window).resize(function() {

            var size = window.innerWidth / mid;

            if (size < min) size = min;
            if (size > max) size = max;

            $this.css('font-size', size + 'px');

        }).trigger('resize');
    };

})(jQuery);;/**
 * A jQuery plugin for keeping the aspect ratio
 * https://github.com/loonkwil/jquery.keep-ratio
 *
 * Date: Sept 14 2014
 */
(function(window) {
    'use strict';

    var $ = window.jQuery;
    var raf = window.requestAnimationFrame;

    /**
     * @type {{ratio: number, calculate: string}}
     */
    var defaultOptions = { ratio: 4 / 3, calculate: 'height' };

    /**
     * @param {jQuery} $el
     * @param {{ratio: number, calculate: string}} options
     * @param {boolean=} forceRendering
     * @return {jQuery}
     */
    var resize = function($el, options, forceRendering) {
        var resizeFunction;
        if (options.calculate === 'height') {
            var width = $el.width();
            resizeFunction = function() {
                $el.height(Math.round(width / options.ratio));
            };
        } else {
            var height = $el.height();
            resizeFunction = function() {
                $el.width(Math.round(height * options.ratio));
            };
        }

        if (forceRendering) {
            resizeFunction();
        } else {
            raf(resizeFunction);
        }

        return $el;
    };

    /**
     * @param {jQuery} $els
     * @param {{ratio: number, calculate: string}} options
     * @param {boolean=} forceRendering
     * @return {jQuery}
     */
    var resizeAll = function($els, options, forceRendering) {
        return $els.each(function() {
            resize($(this), options, forceRendering);
        });
    };


    /**
     * @param {{ratio: number, calculate: string}} options
     * @return {jQuery}
     */
    $.fn.keepRatio = function(options) {
        options = $.extend({}, defaultOptions, options);

        var $boxes = $(this);

        $(window).on('resize', function() {
            resizeAll($boxes, options);
        });

        return resizeAll($boxes, options, true);
    };
}(window));
