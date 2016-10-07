/* */ 
define(["exports", "aurelia-framework", "./aubs-tabset"], function (exports, _aureliaFramework, _aubsTabset) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.AubsTabCustomElement = undefined;

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

    var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

    var AubsTabCustomElement = exports.AubsTabCustomElement = (_dec = (0, _aureliaFramework.inject)(_aubsTabset.AubsTabsetCustomElement), _dec(_class = (_class2 = function () {
        function AubsTabCustomElement(tabset) {
            var _this = this;

            _classCallCheck(this, AubsTabCustomElement);

            _initDefineProp(this, "header", _descriptor, this);

            _initDefineProp(this, "active", _descriptor2, this);

            _initDefineProp(this, "disabled", _descriptor3, this);

            _initDefineProp(this, "onSelect", _descriptor4, this);

            _initDefineProp(this, "onDeselect", _descriptor5, this);

            this.tabset = tabset;

            this.tabChangedListener = function (index) {
                return _this.handleTabChanged(index);
            };
        }

        AubsTabCustomElement.prototype.attached = function attached() {
            if (!this.header) {
                throw new Error('Must provide a header for the tab.');
            }

            this.index = this.tabset.getTabIndex();
            this.tabset.addTabChangedListener(this.index, this.active, this.tabChangedListener);
        };

        AubsTabCustomElement.prototype.detached = function detached() {
            this.tabset.removeTabChangedListener(this.tabChangedListener);
        };

        AubsTabCustomElement.prototype.handleTabChanged = function handleTabChanged(index) {
            var isSelected = index === this.index;

            if (isSelected === this.active) {
                return;
            }

            this.active = isSelected;

            if (isSelected) {
                if (this.onSelect && typeof this.onSelect === 'function') {
                    this.onSelect();
                }
            } else {
                if (this.onDeselect && typeof this.onDeselect == 'function') {
                    this.onDeselect();
                }
            }
        };

        return AubsTabCustomElement;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "header", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "active", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "disabled", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "onSelect", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "onDeselect", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    })), _class2)) || _class);
});