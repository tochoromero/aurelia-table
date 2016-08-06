define(['exports', 'aurelia-framework', 'au-table/au-table'], function (exports, _aureliaFramework, _auTable) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.AutFilterCustomAttribute = undefined;

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

    var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2;

    var AutFilterCustomAttribute = exports.AutFilterCustomAttribute = (_dec = (0, _aureliaFramework.inject)(_auTable.AuTableCustomAttribute), _dec(_class = (_class2 = function () {
        function AutFilterCustomAttribute(auTable) {
            _classCallCheck(this, AutFilterCustomAttribute);

            _initDefineProp(this, 'filterText', _descriptor, this);

            _initDefineProp(this, 'filterKeys', _descriptor2, this);

            this.auTable = auTable;
        }

        AutFilterCustomAttribute.prototype.bind = function bind() {
            this.auTable.filterKeys = this.filterKeys;
        };

        AutFilterCustomAttribute.prototype.filterTextChanged = function filterTextChanged(newValue) {
            this.auTable.setFilterText(newValue);
        };

        AutFilterCustomAttribute.prototype.filterKeysChanged = function filterKeysChanged(newValue) {
            this.auTable.setFilterKeys(newValue);
        };

        return AutFilterCustomAttribute;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'filterText', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'filterKeys', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    })), _class2)) || _class);
});