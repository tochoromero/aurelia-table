"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuTableCustomAttribute = undefined;

var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

var _aureliaFramework = require("aurelia-framework");

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

var AuTableCustomAttribute = exports.AuTableCustomAttribute = (_dec = (0, _aureliaFramework.inject)(_aureliaFramework.BindingEngine), _dec2 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec3 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec4 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec(_class = (_class2 = function () {
    function AuTableCustomAttribute(bindingEngine) {
        var _this = this;

        _classCallCheck(this, AuTableCustomAttribute);

        _initDefineProp(this, "data", _descriptor, this);

        _initDefineProp(this, "displayData", _descriptor2, this);

        _initDefineProp(this, "filterText", _descriptor3, this);

        _initDefineProp(this, "filterKeys", _descriptor4, this);

        _initDefineProp(this, "currentPage", _descriptor5, this);

        _initDefineProp(this, "pageSize", _descriptor6, this);

        _initDefineProp(this, "totalItems", _descriptor7, this);

        this.isAttached = false;
        this.sortChangedListeners = [];

        this.dataObserver = bindingEngine.collectionObserver(this.data).subscribe(function () {
            return _this.applyPlugins();
        });
    }

    AuTableCustomAttribute.prototype.attached = function attached() {
        this.isAttached = true;
        this.applyPlugins();
    };

    AuTableCustomAttribute.prototype.detached = function detached() {
        this.dataObserver.dispose();
    };

    AuTableCustomAttribute.prototype.filterTextChanged = function filterTextChanged() {
        if (this.hasPagination()) {
            this.currentPage = 1;
        }
        this.applyPlugins();
    };

    AuTableCustomAttribute.prototype.filterKeysChanged = function filterKeysChanged() {
        if (this.hasPagination()) {
            this.currentPage = 1;
        }
        this.applyPlugins();
    };

    AuTableCustomAttribute.prototype.currentPageChanged = function currentPageChanged() {
        this.applyPlugins();
    };

    AuTableCustomAttribute.prototype.getDataCopy = function getDataCopy() {
        return [].concat(this.data);
    };

    AuTableCustomAttribute.prototype.applyPlugins = function applyPlugins() {
        if (!this.isAttached) {
            return;
        }

        var localData = this.getDataCopy();

        if (this.hasFilter()) {
            localData = this.doFilter(localData);
        }

        if (this.sortKey && this.sortOrder !== 0) {
            this.doSort(localData, this.sortKey, this.sortOrder);
        }

        this.totalItems = localData.length;

        if (this.hasPagination()) {
            localData = this.doPaginate(localData);
        }

        this.displayData = localData;
    };

    AuTableCustomAttribute.prototype.doFilter = function doFilter(toFilter) {
        var filteredData = [];

        for (var _iterator = toFilter, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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

            for (var _iterator2 = this.filterKeys, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
                var _ref2;

                if (_isArray2) {
                    if (_i2 >= _iterator2.length) break;
                    _ref2 = _iterator2[_i2++];
                } else {
                    _i2 = _iterator2.next();
                    if (_i2.done) break;
                    _ref2 = _i2.value;
                }

                var key = _ref2;

                var value = next[key].toString();

                if (value.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1) {
                    filteredData.push(next);
                    break;
                }
            }
        }

        return filteredData;
    };

    AuTableCustomAttribute.prototype.doSort = function doSort(toSort, sortKey, sortOrder) {
        toSort.sort(function (a, b) {

            var val1 = void 0;
            var val2 = void 0;

            if (typeof sortKey === "function") {
                val1 = sortKey(a);
                val2 = sortKey(b);
            } else {
                val1 = a[sortKey];
                val2 = b[sortKey];
            }

            if (isNaN(val1)) {
                var str1 = val1.toString();
                var str2 = val2.toString();

                return str1.localeCompare(str2) * sortOrder;
            } else {
                return (val1 - val2) * sortOrder;
            }
        });
    };

    AuTableCustomAttribute.prototype.doPaginate = function doPaginate(toPaginate) {
        if (toPaginate.length <= this.pageSize) {
            return toPaginate;
        }

        var start = (this.currentPage - 1) * this.pageSize;

        var end = start + this.pageSize;

        return toPaginate.slice(start, end);
    };

    AuTableCustomAttribute.prototype.hasFilter = function hasFilter() {
        return this.filterText && (typeof this.filterText === 'string' || this.filterText instanceof String) && this.filterText.trim().length > 0 && this.filterKeys.length > 0;
    };

    AuTableCustomAttribute.prototype.hasPagination = function hasPagination() {
        return this.currentPage > 0;
    };

    AuTableCustomAttribute.prototype.dataChanged = function dataChanged() {
        this.applyPlugins();
    };

    AuTableCustomAttribute.prototype.sortChanged = function sortChanged(key, order) {
        this.sortKey = key;
        this.sortOrder = order;
        this.applyPlugins();
        this.emitSortChanged();
    };

    AuTableCustomAttribute.prototype.addSortChangedListener = function addSortChangedListener(callback) {
        this.sortChangedListeners.push(callback);
    };

    AuTableCustomAttribute.prototype.removeSortChangedListener = function removeSortChangedListener(callback) {
        this.removeListener(callback, this.sortChangedListeners);
    };

    AuTableCustomAttribute.prototype.emitSortChanged = function emitSortChanged() {
        for (var _iterator3 = this.sortChangedListeners, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
            var _ref3;

            if (_isArray3) {
                if (_i3 >= _iterator3.length) break;
                _ref3 = _iterator3[_i3++];
            } else {
                _i3 = _iterator3.next();
                if (_i3.done) break;
                _ref3 = _i3.value;
            }

            var listener = _ref3;

            listener();
        }
    };

    AuTableCustomAttribute.prototype.removeListener = function removeListener(callback, listeners) {
        var index = listeners.indexOf(callback);

        if (index > -1) {
            listeners.splice(index, 1);
        }
    };

    return AuTableCustomAttribute;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "data", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "displayData", [_dec2], {
    enumerable: true,
    initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "filterText", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "filterKeys", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "currentPage", [_dec3], {
    enumerable: true,
    initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "pageSize", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "totalItems", [_dec4], {
    enumerable: true,
    initializer: null
})), _class2)) || _class);