/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.AubsBtnRadioCustomAttribute = undefined;

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

    var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2;

    var AubsBtnRadioCustomAttribute = exports.AubsBtnRadioCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec2 = (0, _aureliaFramework.bindable)({defaultBindingMode: _aureliaFramework.bindingMode.twoWay}), _dec(_class = (_class2 = function () {
        function AubsBtnRadioCustomAttribute(element) {
            var _this = this;

            _classCallCheck(this, AubsBtnRadioCustomAttribute);

            _initDefineProp(this, 'model', _descriptor, this);

            _initDefineProp(this, 'value', _descriptor2, this);

            this.element = element;

            if (this.element.tagName !== 'BUTTON' && this.element.tagName !== 'A') {
                throw new Error("The aubs-btn-radio attribute can only be used in button and anchor elements");
            }

            this.clickedListener = function () {
                return _this.buttonClicked();
            };
        }

        AubsBtnRadioCustomAttribute.prototype.bind = function bind() {
            if (this.value == null || this.value == undefined) {
                throw new Error('Must provide a value for the radio button');
            }
        };

        AubsBtnRadioCustomAttribute.prototype.attached = function attached() {
            this.element.addEventListener('click', this.clickedListener);
            this.setClass();
        };

        AubsBtnRadioCustomAttribute.prototype.detached = function detached() {
            this.element.removeEventListener('click', this.clickedListener);
        };

        AubsBtnRadioCustomAttribute.prototype.modelChanged = function modelChanged() {
            this.setClass();
        };

        AubsBtnRadioCustomAttribute.prototype.buttonClicked = function buttonClicked() {
            if (this.model == this.value) {
                return;
            }

            this.model = this.value;
        };

        AubsBtnRadioCustomAttribute.prototype.setClass = function setClass() {
            if (this.model == this.value) {
                this.element.classList.add('active');
            } else {
                this.element.classList.remove('active');
            }
        };

        return AubsBtnRadioCustomAttribute;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'model', [_dec2], {
        enumerable: true,
        initializer: null
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    })), _class2)) || _class);
});