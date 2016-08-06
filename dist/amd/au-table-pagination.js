define(["exports", "aurelia-framework", "./au-table"], function (exports, _aureliaFramework, _auTable) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.AutPaginationCustomElement = undefined;

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

    var _dec, _dec2, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

    var AutPaginationCustomElement = exports.AutPaginationCustomElement = (_dec = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec2 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), (_class = function () {
        function AutPaginationCustomElement() {
            _classCallCheck(this, AutPaginationCustomElement);

            _initDefineProp(this, "currentPage", _descriptor, this);

            _initDefineProp(this, "pageSize", _descriptor2, this);

            _initDefineProp(this, "totalItems", _descriptor3, this);

            _initDefineProp(this, "hideSinglePage", _descriptor4, this);

            this.totalPages = 1;
        }

        AutPaginationCustomElement.prototype.bind = function bind() {
            if (this.currentPage === undefined || this.currentPage == null || this.currentPage < 1) {
                this.currentPage = 1;
            }

            if (this.pageSize === undefined || this.pageSize === null || this.pageSize < 1) {
                this.pageSize = 5;
            }
        };

        AutPaginationCustomElement.prototype.totalItemsChanged = function totalItemsChanged() {
            if (this.totalItems <= this.pageSize) {
                this.totalPages = 1;
                return;
            }

            this.totalPages = Math.ceil(this.totalItems / this.pageSize);
        };

        AutPaginationCustomElement.prototype.selectPage = function selectPage(page) {
            this.currentPage = page;
        };

        AutPaginationCustomElement.prototype.nextPage = function nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        };

        AutPaginationCustomElement.prototype.previousPage = function previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        };

        return AutPaginationCustomElement;
    }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "currentPage", [_dec], {
        enumerable: true,
        initializer: null
    }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "pageSize", [_dec2], {
        enumerable: true,
        initializer: null
    }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "totalItems", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "hideSinglePage", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    })), _class));
});