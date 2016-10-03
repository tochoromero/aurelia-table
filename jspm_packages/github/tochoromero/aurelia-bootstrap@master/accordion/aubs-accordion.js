/* */
define(["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.AubsAccordionCustomElement = undefined;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    var _desc, _value, _class, _descriptor;

    var AubsAccordionCustomElement = exports.AubsAccordionCustomElement = (_class = function () {
        function AubsAccordionCustomElement() {
            _classCallCheck(this, AubsAccordionCustomElement);

            _initDefineProp(this, "closeOthers", _descriptor, this);

            this.groups = [];
        }

        AubsAccordionCustomElement.prototype.registerGroup = function registerGroup(group) {
            this.groups.push(group);
        };

        AubsAccordionCustomElement.prototype.groupToggled = function groupToggled(group) {
            if (this.closeOthers) {
                for (var _iterator = this.groups, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;

                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref = _i.value;
                    }

                    var next = _ref;

                    if (next !== group) {
                        next.isOpen = false;
                    }
                }
            }
        };

        return AubsAccordionCustomElement;
    }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "closeOthers", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    })), _class);
});