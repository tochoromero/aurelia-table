var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
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

import { inject, bindable, bindingMode, BindingEngine } from "aurelia-framework";

export let AureliaTableCustomAttribute = (_dec = inject(BindingEngine), _dec2 = bindable({defaultBindingMode: bindingMode.twoWay}), _dec3 = bindable({defaultBindingMode: bindingMode.twoWay}), _dec4 = bindable({defaultBindingMode: bindingMode.twoWay}), _dec5 = bindable({defaultBindingMode: bindingMode.twoWay}), _dec(_class = (_class2 = class AureliaTableCustomAttribute {

    constructor(bindingEngine) {
        _initDefineProp(this, 'data', _descriptor, this);

        _initDefineProp(this, 'displayData', _descriptor2, this);

        _initDefineProp(this, 'filters', _descriptor3, this);

        _initDefineProp(this, 'currentPage', _descriptor4, this);

        _initDefineProp(this, 'pageSize', _descriptor5, this);

        _initDefineProp(this, 'totalItems', _descriptor6, this);

        _initDefineProp(this, 'api', _descriptor7, this);

        this.isAttached = false;
        this.sortChangedListeners = [];
        this.beforePagination = [];
        this.filterObservers = [];

        this.bindingEngine = bindingEngine;
    }

    bind() {
        if (Array.isArray(this.data)) {
            this.dataObserver = this.bindingEngine.collectionObserver(this.data).subscribe(() => this.applyPlugins());
        }

        if (Array.isArray(this.filters)) {
            for (let filter of this.filters) {
                let observer = this.bindingEngine.propertyObserver(filter, 'value').subscribe(() => this.filterChanged());
                this.filterObservers.push(observer);
            }
        }

        this.api = {
            revealItem: item => this.revealItem(item)
        };
    }

    attached() {
        this.isAttached = true;
        this.applyPlugins();
    }

    detached() {
        if (this.dataObserver) {
            this.dataObserver.dispose();
        }

        for (let observer of this.filterObservers) {
            observer.dispose();
        }
    }

    filterChanged() {
        if (this.hasPagination()) {
            this.currentPage = 1;
        }
        this.applyPlugins();
    }

    currentPageChanged() {
        this.applyPlugins();
    }

    pageSizeChanged() {
        this.applyPlugins();
    }

    getDataCopy() {
        return [].concat(this.data);
    }

    applyPlugins() {
        if (!this.isAttached || !this.data) {
            return;
        }

        let localData = this.getDataCopy();

        if (this.hasFilter()) {
            localData = this.doFilter(localData);
        }

        if (this.sortKey && this.sortOrder !== 0) {
            this.doSort(localData, this.sortKey, this.sortOrder);
        }

        this.totalItems = localData.length;

        if (this.hasPagination()) {
            this.beforePagination = [].concat(localData);
            localData = this.doPaginate(localData);
        }

        this.displayData = localData;
    }

    doFilter(toFilter) {
        let filteredData = [];

        for (let item of toFilter) {
            for (let filter of this.filters) {
                if (this.passFilter(item, filter)) {
                    filteredData.push(item);
                    break;
                }
            }
        }

        return filteredData;
    }

    passFilter(item, filter) {
        if (filter.value === null || filter.value === undefined || filter.value.toString().trim() === '') {
            return true;
        }

        for (let key of filter.keys) {
            if (item[key] != null) {
                let value = item[key].toString().toLowerCase();

                if (value.indexOf(filter.value.toString().toLowerCase()) > -1) {
                    return true;
                }
            }
        }
        return false;
    }

    doSort(toSort, sortKey, sortOrder) {
        toSort.sort((a, b) => {

            let val1;
            let val2;

            if (typeof sortKey === "function") {
                val1 = sortKey(a, sortOrder);
                val2 = sortKey(b, sortOrder);
            } else {
                val1 = a[sortKey];
                val2 = b[sortKey];
            }

            if (val1 == null) val1 = "";
            if (val2 == null) val2 = "";

            if (this.isNumeric(val1) && this.isNumeric(val2)) {
                return (val1 - val2) * sortOrder;
            } else {
                let str1 = val1.toString();
                let str2 = val2.toString();

                return str1.localeCompare(str2) * sortOrder;
            }
        });
    }

    isNumeric(toCheck) {
        return !isNaN(parseFloat(toCheck)) && isFinite(toCheck);
    }

    doPaginate(toPaginate) {
        if (toPaginate.length <= this.pageSize) {
            return toPaginate;
        }

        let start = (this.currentPage - 1) * this.pageSize;

        let end = start + this.pageSize;

        return toPaginate.slice(start, end);
    }

    hasFilter() {
        return Array.isArray(this.filters) && this.filters.length > 0;
    }

    hasPagination() {
        return this.currentPage > 0;
    }

    dataChanged() {
        if (this.dataObserver) {
            this.dataObserver.dispose();
        }

        this.dataObserver = this.bindingEngine.collectionObserver(this.data).subscribe(() => this.applyPlugins());

        this.applyPlugins();
    }

    sortChanged(key, order) {
        this.sortKey = key;
        this.sortOrder = order;
        this.applyPlugins();
        this.emitSortChanged();
    }

    addSortChangedListener(callback) {
        this.sortChangedListeners.push(callback);
    }

    removeSortChangedListener(callback) {
        this.removeListener(callback, this.sortChangedListeners);
    }

    emitSortChanged() {
        for (let listener of this.sortChangedListeners) {
            listener();
        }
    }

    removeListener(callback, listeners) {
        var index = listeners.indexOf(callback);

        if (index > -1) {
            listeners.splice(index, 1);
        }
    }

    revealItem(item) {
        if (!this.hasPagination()) {
            return true;
        }

        let index = this.beforePagination.indexOf(item);

        if (index === -1) {
            return false;
        }

        this.currentPage = Math.ceil((index + 1) / this.pageSize);

        return true;
    }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'data', [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'displayData', [_dec2], {
    enumerable: true,
    initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'filters', [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'currentPage', [_dec3], {
    enumerable: true,
    initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'pageSize', [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'totalItems', [_dec4], {
    enumerable: true,
    initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'api', [_dec5], {
    enumerable: true,
    initializer: null
})), _class2)) || _class);