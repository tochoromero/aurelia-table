/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.AubsTabsetCustomElement = undefined;

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

    var _dec, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

    var AubsTabsetCustomElement = exports.AubsTabsetCustomElement = (_dec = (0, _aureliaFramework.children)('aubs-tab'), (_class = function () {
        function AubsTabsetCustomElement() {
            _classCallCheck(this, AubsTabsetCustomElement);

            _initDefineProp(this, 'tabs', _descriptor, this);

            _initDefineProp(this, 'type', _descriptor2, this);

            _initDefineProp(this, 'vertical', _descriptor3, this);

            this.tabChangedListeners = [];
            this.tabsClass = 'nav-tabs';
            this.indexCount = 0;
        }

        AubsTabsetCustomElement.prototype.bind = function bind() {
            this.tabs.forEach(function (tab, index) {
                return tab.index = index + 10;
            });

            if (this.type === 'pills') {
                this.tabsClass = 'nav-pills';
            }
        };

        AubsTabsetCustomElement.prototype.getTabIndex = function getTabIndex() {
            return this.indexCount++;
        };

        AubsTabsetCustomElement.prototype.addTabChangedListener = function addTabChangedListener(index, isDefault, callback) {
            this.tabChangedListeners.push(callback);

            if (this.active == undefined || isDefault) {
                this.active = index;
            }

            this.emitTabChanged();
        };

        AubsTabsetCustomElement.prototype.removeTabChangedListener = function removeTabChangedListener(callback) {
            var index = this.tabChangedListeners.indexOf(callback);

            if (index > -1) {
                this.tabChangedListeners.splice(index, 1);
            }
        };

        AubsTabsetCustomElement.prototype.selectTab = function selectTab(tab) {
            if (tab.disabled) {
                return;
            }

            if (this.active === tab.index) {
                return;
            }

            this.active = tab.index;

            this.emitTabChanged();
        };

        AubsTabsetCustomElement.prototype.emitTabChanged = function emitTabChanged() {
            for (var _iterator = this.tabChangedListeners, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                var _ref;

                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }

                var listener = _ref;

                listener(this.active);
            }
        };

        return AubsTabsetCustomElement;
    }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'tabs', [_dec], {
        enumerable: true,
        initializer: function initializer() {
            return [];
        }
    }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'type', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return 'tabs';
        }
    }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'vertical', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    })), _class));
});