'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var bindable, bindingMode, DOM, _dec, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _class2, _temp, AutPaginationCustomElement;

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
      bindable = _aureliaFramework.bindable;
      bindingMode = _aureliaFramework.bindingMode;
      DOM = _aureliaFramework.DOM;
    }],
    execute: function () {
      _export('AutPaginationCustomElement', AutPaginationCustomElement = (_dec = bindable({ defaultBindingMode: bindingMode.twoWay }), (_class = (_temp = _class2 = function () {
        function AutPaginationCustomElement(element) {
          _classCallCheck(this, AutPaginationCustomElement);

          _initDefineProp(this, 'currentPage', _descriptor, this);

          _initDefineProp(this, 'pageSize', _descriptor2, this);

          _initDefineProp(this, 'totalItems', _descriptor3, this);

          _initDefineProp(this, 'hideSinglePage', _descriptor4, this);

          _initDefineProp(this, 'paginationSize', _descriptor5, this);

          _initDefineProp(this, 'boundaryLinks', _descriptor6, this);

          _initDefineProp(this, 'firstText', _descriptor7, this);

          _initDefineProp(this, 'lastText', _descriptor8, this);

          _initDefineProp(this, 'directionLinks', _descriptor9, this);

          _initDefineProp(this, 'previousText', _descriptor10, this);

          _initDefineProp(this, 'nextText', _descriptor11, this);

          this.totalPages = 1;
          this.displayPages = [];

          this.element = element;
        }

        AutPaginationCustomElement.prototype.bind = function bind() {
          if (this.currentPage === undefined || this.currentPage === null || this.currentPage < 1) {
            this.currentPage = 1;
          }

          if (this.pageSize === undefined || this.pageSize === null || this.pageSize < 1) {
            this.pageSize = 5;
          }
        };

        AutPaginationCustomElement.prototype.totalItemsChanged = function totalItemsChanged() {
          this.currentPage = 1;
          this.calculatePages();
        };

        AutPaginationCustomElement.prototype.pageSizeChanged = function pageSizeChanged() {
          this.currentPage = 1;
          this.calculatePages();
        };

        AutPaginationCustomElement.prototype.currentPageChanged = function currentPageChanged() {
          this.calculatePages();
          this.dispatchPageChangedEvent();
        };

        AutPaginationCustomElement.prototype.dispatchPageChangedEvent = function dispatchPageChangedEvent() {
          var event = DOM.createCustomEvent('page-changed', {
            bubbles: true,
            detail: {
              currentPage: this.currentPage
            }
          });
          this.element.dispatchEvent(event);
        };

        AutPaginationCustomElement.prototype.calculatePages = function calculatePages() {
          this.totalPages = this.totalItems <= this.pageSize ? 1 : Math.ceil(this.totalItems / this.pageSize);

          if (isNaN(this.paginationSize) || this.paginationSize <= 0) {
            this.displayAllPages();
          } else {
            this.limitVisiblePages();
          }
        };

        AutPaginationCustomElement.prototype.displayAllPages = function displayAllPages() {
          var displayPages = [];

          for (var i = 1; i <= this.totalPages; i++) {
            displayPages.push({
              title: i.toString(),
              value: i
            });
          }
          this.displayPages = displayPages;
        };

        AutPaginationCustomElement.prototype.limitVisiblePages = function limitVisiblePages() {
          var displayPages = [];

          var totalTiers = Math.ceil(this.totalPages / this.paginationSize);

          var activeTier = Math.ceil(this.currentPage / this.paginationSize);

          var start = (activeTier - 1) * this.paginationSize + 1;
          var end = start + this.paginationSize;

          if (activeTier > 1) {
            displayPages.push({
              title: '...',
              value: start - 1
            });
          }

          for (var i = start; i < end; i++) {
            if (i > this.totalPages) {
              break;
            }

            displayPages.push({
              title: i.toString(),
              value: i
            });
          }

          if (activeTier < totalTiers) {
            displayPages.push({
              title: '...',
              value: end
            });
          }

          this.displayPages = displayPages;
        };

        AutPaginationCustomElement.prototype.selectPage = function selectPage(page) {
          if (page < 1 || page > this.totalPages || page === this.currentPage) {
            return;
          }

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

        AutPaginationCustomElement.prototype.firstPage = function firstPage() {
          this.currentPage = 1;
        };

        AutPaginationCustomElement.prototype.lastPage = function lastPage() {
          this.currentPage = this.totalPages;
        };

        return AutPaginationCustomElement;
      }(), _class2.inject = [Element], _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'currentPage', [_dec], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'pageSize', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'totalItems', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'hideSinglePage', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'paginationSize', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'boundaryLinks', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'firstText', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 'First';
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'lastText', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 'Last';
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'directionLinks', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'previousText', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return '<';
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'nextText', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return '>';
        }
      })), _class)));

      _export('AutPaginationCustomElement', AutPaginationCustomElement);
    }
  };
});