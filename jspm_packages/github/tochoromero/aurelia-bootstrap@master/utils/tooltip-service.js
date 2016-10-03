/* */
define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var TooltipService = exports.TooltipService = function () {
        function TooltipService() {
            _classCallCheck(this, TooltipService);
        }

        TooltipService.prototype.calculatePosition = function calculatePosition(parent, floating, position) {
            var elementRect = parent.getBoundingClientRect();
            var floatingRect = floating.getBoundingClientRect();

            var result = {};

            if (position === 'top') {
                result.top = elementRect.top - floatingRect.height;
                result.left = elementRect.left + elementRect.width / 2 - floatingRect.width / 2;
            } else if (position === 'bottom') {
                result.top = elementRect.top + elementRect.height;
                result.left = elementRect.left + elementRect.width / 2 - floatingRect.width / 2;
            } else if (position === 'left') {
                result.top = elementRect.top + elementRect.height / 2 - floatingRect.height / 2;
                result.left = elementRect.left - floatingRect.width;
            } else {
                result.top = elementRect.top + elementRect.height / 2 - floatingRect.height / 2;
                result.left = elementRect.left + elementRect.width;
            }

            result.top += window.scrollY;

            return result;
        };

        TooltipService.prototype.setTriggers = function setTriggers(element, triggers, listeners) {
            if (!triggers.includes('none')) {
                if (triggers.includes('mouseover')) {
                    element.addEventListener('mouseover', listeners.in);
                    element.addEventListener('mouseleave', listeners.out);
                }

                if (triggers.includes('focus')) {
                    element.addEventListener('focus', listeners.in);
                    element.addEventListener('blur', listeners.out);
                }

                if (triggers.includes('click')) {
                    element.addEventListener('click', listeners.click);
                } else if (triggers.includes('outsideClick')) {
                    element.addEventListener('click', listeners.in);
                    document.addEventListener('click', listeners.outside);
                }
            }
        };

        TooltipService.prototype.removeTriggers = function removeTriggers(element, triggers, listeners) {
            if (!triggers.includes('none')) {
                if (triggers.includes('mouseover')) {
                    element.removeEventListener('mouseover', listeners.in);
                    element.removeEventListener('mouseleave', listeners.out);
                }

                if (triggers.includes('focus')) {
                    element.removeEventListener('focus', listeners.in);
                    element.removeEventListener('blur', listeners.out);
                }

                if (triggers.includes('click')) {
                    element.removeEventListener('click', listeners.click);
                } else if (triggers.includes('outsideClick')) {
                    element.removeEventListener('click', listeners.in);
                    document.removeEventListener('click', listeners.outside);
                }
            }

            window.removeEventListener('resize', listeners.resize);
        };

        return TooltipService;
    }();
});