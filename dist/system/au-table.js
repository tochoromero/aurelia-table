'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var inject, bindable, bindingMode, BindingEngine, _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, AureliaTableCustomAttribute;

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

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
      bindingMode = _aureliaFramework.bindingMode;
      BindingEngine = _aureliaFramework.BindingEngine;
    }],
    execute: function () {
      _export('AureliaTableCustomAttribute', AureliaTableCustomAttribute = (_dec = inject(BindingEngine), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec4 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec5 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = (_class2 = function () {
        function AureliaTableCustomAttribute(bindingEngine) {
          _classCallCheck(this, AureliaTableCustomAttribute);

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

        AureliaTableCustomAttribute.prototype.bind = function bind() {
          var _this = this;

          if (Array.isArray(this.data)) {
            this.dataObserver = this.bindingEngine.collectionObserver(this.data).subscribe(function () {
              return _this.applyPlugins();
            });
          }

          if (Array.isArray(this.filters)) {
            for (var _iterator = this.filters, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
              var _ref;

              if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
              } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
              }

              var filter = _ref;

              var observer = this.bindingEngine.propertyObserver(filter, 'value').subscribe(function () {
                return _this.filterChanged();
              });
              this.filterObservers.push(observer);
            }
          }

          this.api = {
            revealItem: function revealItem(item) {
              return _this.revealItem(item);
            }
          };
        };

        AureliaTableCustomAttribute.prototype.attached = function attached() {
          this.isAttached = true;
          this.applyPlugins();
        };

        AureliaTableCustomAttribute.prototype.detached = function detached() {
          if (this.dataObserver) {
            this.dataObserver.dispose();
          }

          for (var _iterator2 = this.filterObservers, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            var _ref2;

            if (_isArray2) {
              if (_i2 >= _iterator2.length) break;
              _ref2 = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done) break;
              _ref2 = _i2.value;
            }

            var observer = _ref2;

            observer.dispose();
          }
        };

        AureliaTableCustomAttribute.prototype.filterChanged = function filterChanged() {
          if (this.hasPagination()) {
            this.currentPage = 1;
          }
          this.applyPlugins();
        };

        AureliaTableCustomAttribute.prototype.currentPageChanged = function currentPageChanged() {
          this.applyPlugins();
        };

        AureliaTableCustomAttribute.prototype.pageSizeChanged = function pageSizeChanged() {
          this.applyPlugins();
        };

        AureliaTableCustomAttribute.prototype.getDataCopy = function getDataCopy() {
          return [].concat(this.data);
        };

        AureliaTableCustomAttribute.prototype.applyPlugins = function applyPlugins() {
          if (!this.isAttached || !this.data) {
            return;
          }

          var localData = this.getDataCopy();

          if (this.hasFilter()) {
            localData = this.doFilter(localData);
          }

          if ((this.sortKey || this.customSort) && this.sortOrder !== 0) {
            this.doSort(localData);
          }

          this.totalItems = localData.length;

          if (this.hasPagination()) {
            this.beforePagination = [].concat(localData);
            localData = this.doPaginate(localData);
          }

          this.displayData = localData;
        };

        AureliaTableCustomAttribute.prototype.doFilter = function doFilter(toFilter) {
          var filteredData = [];

          for (var _iterator3 = toFilter, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
            var _ref3;

            if (_isArray3) {
              if (_i3 >= _iterator3.length) break;
              _ref3 = _iterator3[_i3++];
            } else {
              _i3 = _iterator3.next();
              if (_i3.done) break;
              _ref3 = _i3.value;
            }

            var item = _ref3;

            var passed = true;

            for (var _iterator4 = this.filters, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
              var _ref4;

              if (_isArray4) {
                if (_i4 >= _iterator4.length) break;
                _ref4 = _iterator4[_i4++];
              } else {
                _i4 = _iterator4.next();
                if (_i4.done) break;
                _ref4 = _i4.value;
              }

              var filter = _ref4;

              if (!this.passFilter(item, filter)) {
                passed = false;
                break;
              }
            }

            if (passed) {
              filteredData.push(item);
            }
          }

          return filteredData;
        };

        AureliaTableCustomAttribute.prototype.passFilter = function passFilter(item, filter) {
          if (typeof filter.custom === 'function' && !filter.custom(filter.value, item)) {
            return false;
          }

          if (filter.value === null || filter.value === undefined || !Array.isArray(filter.keys)) {
            return true;
          }

          for (var _iterator5 = filter.keys, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
            var _ref5;

            if (_isArray5) {
              if (_i5 >= _iterator5.length) break;
              _ref5 = _iterator5[_i5++];
            } else {
              _i5 = _iterator5.next();
              if (_i5.done) break;
              _ref5 = _i5.value;
            }

            var key = _ref5;

            var value = this.getPropertyValue(item, key);

            if (value !== null && value !== undefined) {
              value = value.toString().toLowerCase();

              if (value.indexOf(filter.value.toString().toLowerCase()) > -1) {
                return true;
              }
            }
          }
          return false;
        };

        AureliaTableCustomAttribute.prototype.doSort = function doSort(toSort) {
          var _this2 = this;

          toSort.sort(function (a, b) {
            if (typeof _this2.customSort === 'function') {
              return _this2.customSort(a, b, _this2.sortOrder);
            }

            var val1 = void 0;
            var val2 = void 0;

            if (typeof _this2.sortKey === 'function') {
              val1 = _this2.sortKey(a, _this2.sortOrder);
              val2 = _this2.sortKey(b, _this2.sortOrder);
            } else {
              val1 = _this2.getPropertyValue(a, _this2.sortKey);
              val2 = _this2.getPropertyValue(b, _this2.sortKey);
            }

            if (val1 === null || val1 === undefined) val1 = '';
            if (val2 === null || val2 === undefined) val2 = '';

            if (_this2.isNumeric(val1) && _this2.isNumeric(val2)) {
              return (val1 - val2) * _this2.sortOrder;
            }

            var str1 = val1.toString();
            var str2 = val2.toString();

            return str1.localeCompare(str2) * _this2.sortOrder;
          });
        };

        AureliaTableCustomAttribute.prototype.getPropertyValue = function getPropertyValue(object, keyPath) {
          keyPath = keyPath.replace(/\[(\w+)\]/g, '.$1');
          keyPath = keyPath.replace(/^\./, '');
          var a = keyPath.split('.');
          for (var i = 0, n = a.length; i < n; ++i) {
            var k = a[i];
            if (k in object) {
              object = object[k];
            } else {
              return;
            }
          }
          return object;
        };

        AureliaTableCustomAttribute.prototype.isNumeric = function isNumeric(toCheck) {
          return !isNaN(parseFloat(toCheck)) && isFinite(toCheck);
        };

        AureliaTableCustomAttribute.prototype.doPaginate = function doPaginate(toPaginate) {
          if (toPaginate.length <= this.pageSize) {
            return toPaginate;
          }

          var start = (this.currentPage - 1) * this.pageSize;

          var end = start + this.pageSize;

          return toPaginate.slice(start, end);
        };

        AureliaTableCustomAttribute.prototype.hasFilter = function hasFilter() {
          return Array.isArray(this.filters) && this.filters.length > 0;
        };

        AureliaTableCustomAttribute.prototype.hasPagination = function hasPagination() {
          return this.currentPage > 0 && this.pageSize > 0;
        };

        AureliaTableCustomAttribute.prototype.dataChanged = function dataChanged() {
          var _this3 = this;

          if (this.dataObserver) {
            this.dataObserver.dispose();
          }

          this.dataObserver = this.bindingEngine.collectionObserver(this.data).subscribe(function () {
            return _this3.applyPlugins();
          });

          this.applyPlugins();
        };

        AureliaTableCustomAttribute.prototype.sortChanged = function sortChanged(key, custom, order) {
          this.sortKey = key;
          this.customSort = custom;
          this.sortOrder = order;
          this.applyPlugins();
          this.emitSortChanged();
        };

        AureliaTableCustomAttribute.prototype.addSortChangedListener = function addSortChangedListener(callback) {
          this.sortChangedListeners.push(callback);
        };

        AureliaTableCustomAttribute.prototype.removeSortChangedListener = function removeSortChangedListener(callback) {
          this.removeListener(callback, this.sortChangedListeners);
        };

        AureliaTableCustomAttribute.prototype.emitSortChanged = function emitSortChanged() {
          for (var _iterator6 = this.sortChangedListeners, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
            var _ref6;

            if (_isArray6) {
              if (_i6 >= _iterator6.length) break;
              _ref6 = _iterator6[_i6++];
            } else {
              _i6 = _iterator6.next();
              if (_i6.done) break;
              _ref6 = _i6.value;
            }

            var listener = _ref6;

            listener();
          }
        };

        AureliaTableCustomAttribute.prototype.removeListener = function removeListener(callback, listeners) {
          var index = listeners.indexOf(callback);

          if (index > -1) {
            listeners.splice(index, 1);
          }
        };

        AureliaTableCustomAttribute.prototype.revealItem = function revealItem(item) {
          if (!this.hasPagination()) {
            return true;
          }

          var index = this.beforePagination.indexOf(item);

          if (index === -1) {
            return false;
          }

          this.currentPage = Math.ceil((index + 1) / this.pageSize);

          return true;
        };

        return AureliaTableCustomAttribute;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'data', [bindable], {
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
      })), _class2)) || _class));

      _export('AureliaTableCustomAttribute', AureliaTableCustomAttribute);
    }
  };
});