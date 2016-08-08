/* */ 
define(["exports", "aurelia-framework", "./au-table"], function (exports, _aureliaFramework, _auTable) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.AutSelectCustomAttribute = undefined;

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

    var AutSelectCustomAttribute = exports.AutSelectCustomAttribute = (_dec = (0, _aureliaFramework.inject)(_auTable.AureliaTableCustomAttribute, Element, _aureliaFramework.BindingEngine), _dec2 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec(_class = (_class2 = function () {
        function AutSelectCustomAttribute(auTable, element, bindingEngine) {
            var _this = this;

            _classCallCheck(this, AutSelectCustomAttribute);

            _initDefineProp(this, "row", _descriptor, this);

            _initDefineProp(this, "mode", _descriptor2, this);

            _initDefineProp(this, "selectedClass", _descriptor3, this);

            this.auTable = auTable;
            this.element = element;
            this.bindingEngine = bindingEngine;

            this.rowSelectedListener = function () {
                _this.handleRowSelected();
            };
        }

        AutSelectCustomAttribute.prototype.attached = function attached() {
            var _this2 = this;

            this.element.style.cursor = 'pointer';
            this.element.addEventListener('click', this.rowSelectedListener);

            this.selectedSubscription = this.bindingEngine.propertyObserver(this.row, '$IsSelected').subscribe(function () {
                return _this2.isSelectedChanged();
            });

            this.setClass();
        };

        AutSelectCustomAttribute.prototype.detached = function detached() {
            this.element.removeEventListener('click', this.rowSelectedListener);
            this.selectedSubscription.dispose();
        };

        AutSelectCustomAttribute.prototype.setClass = function setClass() {
            if (this.row.$IsSelected) {
                this.element.classList.add(this.selectedClass);
            } else {
                this.element.classList.remove(this.selectedClass);
            }
        };

        AutSelectCustomAttribute.prototype.handleRowSelected = function handleRowSelected() {
            if (this.mode === 'single') {
                this.deselectAll();
            }

            this.row.$IsSelected = this.row.$IsSelected ? false : true;
            this.setClass();
        };

        AutSelectCustomAttribute.prototype.isSelectedChanged = function isSelectedChanged() {
            this.setClass();
        };

        AutSelectCustomAttribute.prototype.deselectAll = function deselectAll() {
            var _this3 = this;

            this.auTable.data.forEach(function (item) {
                if (item !== _this3.row) {
                    item.$IsSelected = false;
                }
            });
        };

        return AutSelectCustomAttribute;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "row", [_dec2], {
        enumerable: true,
        initializer: null
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mode", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return 'single';
        }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "selectedClass", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return 'aut-row-selected';
        }
    })), _class2)) || _class);
});