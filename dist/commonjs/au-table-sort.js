"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AutSortCustomAttribute = undefined;

var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2;

var _aureliaFramework = require("aurelia-framework");

var _auTable = require("au-table/au-table");

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var AutSortCustomAttribute = exports.AutSortCustomAttribute = (_dec = (0, _aureliaFramework.inject)(_auTable.AuTableCustomAttribute, Element), _dec(_class = (_class2 = function () {
    function AutSortCustomAttribute(auTable, element) {
        var _this = this;

        _classCallCheck(this, AutSortCustomAttribute);

        _initDefineProp(this, "key", _descriptor, this);

        _initDefineProp(this, "default", _descriptor2, this);

        this.order = 0;
        this.orderClasses = ['aut-desc', 'aut-sortable', 'aut-asc'];
        this.ignoreEvent = false;

        this.auTable = auTable;
        this.element = element;

        this.rowSelectedListener = function () {
            _this.handleHeaderClicked();
        };

        this.sortChangedListener = function () {
            _this.handleSortChanged();
        };
    }

    AutSortCustomAttribute.prototype.handleSortChanged = function handleSortChanged() {
        if (!this.ignoreEvent) {
            this.order = 0;
            this.setClass();
        } else {
            this.ignoreEvent = false;
        }
    };

    AutSortCustomAttribute.prototype.attached = function attached() {
        this.element.style.cursor = 'pointer';
        this.element.classList.add('aut-sort');

        this.element.addEventListener('click', this.rowSelectedListener);
        this.auTable.addSortChangedListener(this.sortChangedListener);

        this.handleDefault();
        this.setClass();
    };

    AutSortCustomAttribute.prototype.detached = function detached() {
        this.element.removeEventListener('click', this.rowSelectedListener);
        this.auTable.removeSortChangedListener(this.sortChangedListener);
    };

    AutSortCustomAttribute.prototype.handleDefault = function handleDefault() {
        if (this.default) {
            this.order = this.default === 'reverse' ? -1 : 1;
            this.doSort();
        }
    };

    AutSortCustomAttribute.prototype.doSort = function doSort() {
        this.ignoreEvent = true;
        this.auTable.sortChanged(this.key, this.order);
    };

    AutSortCustomAttribute.prototype.setClass = function setClass() {
        var _this2 = this;

        this.orderClasses.forEach(function (next) {
            return _this2.element.classList.remove(next);
        });
        this.element.classList.add(this.orderClasses[this.order + 1]);
    };

    AutSortCustomAttribute.prototype.handleHeaderClicked = function handleHeaderClicked() {
        this.order = this.order == 0 || this.order == -1 ? this.order + 1 : -1;
        this.setClass();
        this.doSort();
    };

    return AutSortCustomAttribute;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "key", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "default", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
})), _class2)) || _class);