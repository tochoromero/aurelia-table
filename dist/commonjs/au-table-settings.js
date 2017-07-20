'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableResult = exports.TableSettings = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2;

var _aureliaFramework = require('aurelia-framework');

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

var TableSettings = exports.TableSettings = (_class = function () {
  _createClass(TableSettings, [{
    key: 'start',
    get: function get() {
      return (this.currentPage - 1) * this.pageSize;
    }
  }]);

  function TableSettings(getItems) {
    _classCallCheck(this, TableSettings);

    _initDefineProp(this, 'pageSize', _descriptor, this);

    _initDefineProp(this, 'currentPage', _descriptor2, this);

    this.totalItems = 0;
    this.draw = 0;

    this.getItems = getItems;
  }

  TableSettings.prototype.pageSizeChanged = function pageSizeChanged(newValue, oldValue) {
    if (oldValue === undefined) {
      return;
    }
    this.loadItems();
  };

  TableSettings.prototype.currentPageChanged = function currentPageChanged(newValue, oldValue) {
    if (oldValue === undefined) {
      return;
    }
    this.loadItems();
  };

  TableSettings.prototype.loadItems = function loadItems() {
    var _this = this;

    var query = this.buildQuery();
    return this.getItems(query).then(function (result) {
      _this.items = result.items;
      _this.totalItems = result.totalItems;
    });
  };

  TableSettings.prototype.buildQuery = function buildQuery() {
    return {
      draw: this.draw++,
      start: this.start,
      pageSize: this.pageSize,
      filter: this.filter
    };
  };

  return TableSettings;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'pageSize', [_aureliaFramework.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 10;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'currentPage', [_aureliaFramework.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
})), _class);

var TableResult = exports.TableResult = function TableResult(result) {
  _classCallCheck(this, TableResult);

  this.draw = result.draw;
  this.totalItems = result.totalItems;
  this.items = result.items;
};