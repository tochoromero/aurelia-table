import {inject, bindable, bindingMode, BindingEngine} from "aurelia-framework";

@inject(BindingEngine)
export class AureliaTableCustomAttribute {

    @bindable data;
    @bindable({defaultBindingMode: bindingMode.twoWay}) displayData;

    @bindable filters;

    @bindable({defaultBindingMode: bindingMode.twoWay}) currentPage;
    @bindable pageSize;
    @bindable({defaultBindingMode: bindingMode.twoWay}) totalItems;

    @bindable({defaultBindingMode: bindingMode.twoWay}) api;

    isAttached = false;

    sortKey;
    sortOrder;
    sortChangedListeners = [];
    beforePagination = [];

    dataObserver;
    filterObservers = [];

    constructor(bindingEngine) {
        this.bindingEngine = bindingEngine;
    }

    bind() {
        if (Array.isArray(this.data)) {
            this.dataObserver = this.bindingEngine.collectionObserver(this.data).subscribe(() => this.applyPlugins())
        }

        if (Array.isArray(this.filters)) {
            for (let filter of this.filters) {
                let observer = this.bindingEngine.propertyObserver(filter, 'value').subscribe(() => this.filterChanged());
                this.filterObservers.push(observer);
            }
        }

        this.api = {
            revealItem: (item) => this.revealItem(item)
        }
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

    /**
     * Copies the data into the display data
     */
    getDataCopy() {
        return [].concat(this.data);
    }

    /**
     * Applies all the plugins to the display data
     */
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
            let passed = true;

            for (let filter of this.filters) {
                if (!this.passFilter(item, filter)) {
                    passed = false;
                    break;
                }
            }

            if (passed) {
                filteredData.push(item)
            }
        }

        return filteredData;
    }

    passFilter(item, filter) {
        if (filter.value === null || filter.value === undefined) {
            return true;
        }

        for (let key of filter.keys) {
            let asObj = this.getValueByDotNotation(item, key);
            if (asObj !== null && asObj !== undefined) {
                let value = asObj.toString().toLowerCase();

                if (value.indexOf(filter.value.toString().toLowerCase()) > -1) {
                    return true;
                }
            }
        }
        return false;
    }

    getValueByDotNotation(obj, path) {
        return new Function('_', 'return _.' + path)(obj);
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

        this.dataObserver = this.bindingEngine.collectionObserver(this.data)
            .subscribe(() => this.applyPlugins());

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
        this.removeListener(callback, this.sortChangedListeners)
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

}