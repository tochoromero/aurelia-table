/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.AubsDropdownCustomAttribute = undefined;

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

    var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

    var AubsDropdownCustomAttribute = exports.AubsDropdownCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec2 = (0, _aureliaFramework.bindable)({defaultBindingMode: _aureliaFramework.bindingMode.twoWay}), _dec(_class = (_class2 = function () {
        function AubsDropdownCustomAttribute(element) {
            var _this = this;

            _classCallCheck(this, AubsDropdownCustomAttribute);

            _initDefineProp(this, 'isOpen', _descriptor, this);

            _initDefineProp(this, 'autoClose', _descriptor2, this);

            _initDefineProp(this, 'onToggle', _descriptor3, this);

            this.element = element;

            this.outsideClickListener = function (evt) {
                return _this.handleBlur(evt);
            };
        }

        AubsDropdownCustomAttribute.prototype.bind = function bind() {
            if (this.hasIsOpen()) {
                this.state = false;
            } else {
                this.state = this.isOpen ? true : false;
            }
        };

        AubsDropdownCustomAttribute.prototype.attached = function attached() {
            this.isAttached = true;
            this.setClass();

            if (this.autoClose !== 'disabled') {
                document.addEventListener('click', this.outsideClickListener);
            }
        };

        AubsDropdownCustomAttribute.prototype.detached = function detached() {
            document.removeEventListener('click', this.outsideClickListener);
        };

        AubsDropdownCustomAttribute.prototype.isOpenChanged = function isOpenChanged() {
            this.state = this.isOpen ? true : false;

            if (this.isAttached) {
                this.setClass();
            }
        };

        AubsDropdownCustomAttribute.prototype.toggle = function toggle() {
            if (this.hasIsOpen()) {
                this.isOpen = !this.state;
            }
            this.state = !this.state;

            if (this.onToggle !== undefined && this.onToggle !== null) {
                this.onToggle(this.state);
            }

            this.setClass();
        };

        AubsDropdownCustomAttribute.prototype.handleBlur = function handleBlur(evt) {
            if (!this.state) {
                return;
            }

            if (!this.element.contains(evt.target) || this.autoClose !== 'outside' && evt.target.parentNode.tagName === 'LI') {
                this.toggle();
            }
        };

        AubsDropdownCustomAttribute.prototype.setClass = function setClass() {
            if (this.state) {
                this.element.classList.add('open');
            } else {
                this.element.classList.remove('open');
            }
        };

        AubsDropdownCustomAttribute.prototype.hasIsOpen = function hasIsOpen() {
            return this.isOpen !== undefined && this.isOpen !== null;
        };

        return AubsDropdownCustomAttribute;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'isOpen', [_dec2], {
        enumerable: true,
        initializer: null
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'autoClose', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return 'always';
        }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'onToggle', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    })), _class2)) || _class);
});