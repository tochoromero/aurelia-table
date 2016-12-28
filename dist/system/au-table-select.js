'use strict';

System.register(['aurelia-framework', './au-table'], function (_export, _context) {
  "use strict";

  var inject, bindable, bindingMode, BindingEngine, AureliaTableCustomAttribute, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, AutSelectCustomAttribute;

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
    }, function (_auTable) {
      AureliaTableCustomAttribute = _auTable.AureliaTableCustomAttribute;
    }],
    execute: function () {
      _export('AutSelectCustomAttribute', AutSelectCustomAttribute = (_dec = inject(AureliaTableCustomAttribute, Element, BindingEngine), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = (_class2 = function () {
        function AutSelectCustomAttribute(auTable, element, bindingEngine) {
          var _this = this;

          _classCallCheck(this, AutSelectCustomAttribute);

          _initDefineProp(this, 'row', _descriptor, this);

          _initDefineProp(this, 'mode', _descriptor2, this);

          _initDefineProp(this, 'selectedClass', _descriptor3, this);

          _initDefineProp(this, 'custom', _descriptor4, this);

          this.auTable = auTable;
          this.element = element;
          this.bindingEngine = bindingEngine;

          this.rowSelectedListener = function (event) {
            _this.handleRowSelected(event);
          };
        }

        AutSelectCustomAttribute.prototype.attached = function attached() {
          var _this2 = this;

          this.element.style.cursor = 'pointer';

          if (!this.custom) {
            this.element.addEventListener('click', this.rowSelectedListener);
          }

          this.selectedSubscription = this.bindingEngine.propertyObserver(this.row, '$isSelected').subscribe(function () {
            return _this2.isSelectedChanged();
          });

          this.setClass();
        };

        AutSelectCustomAttribute.prototype.detached = function detached() {
          if (!this.custom) {
            this.element.removeEventListener('click', this.rowSelectedListener);
          }

          this.selectedSubscription.dispose();
        };

        AutSelectCustomAttribute.prototype.setClass = function setClass() {
          if (this.row.$isSelected) {
            this.element.classList.add(this.selectedClass);
          } else {
            this.element.classList.remove(this.selectedClass);
          }
        };

        AutSelectCustomAttribute.prototype.handleRowSelected = function handleRowSelected(event) {
          var source = event.target || event.srcElement;
          if (source.tagName.toLowerCase() !== 'td') {
            return;
          }
          this.row.$isSelected = this.row.$isSelected ? false : true;
        };

        AutSelectCustomAttribute.prototype.dispatchSelectedEvent = function dispatchSelectedEvent() {
          var selectedEvent = void 0;
          if (window.CustomEvent) {
            selectedEvent = new CustomEvent('select', {
              detail: { row: this.row },
              bubbles: true
            });
          } else {
            selectedEvent = document.createEvent('CustomEvent');
            selectedEvent.initCustomEvent('select', true, true, {
              detail: { row: this.row }
            });
          }
          this.element.dispatchEvent(selectedEvent);
        };

        AutSelectCustomAttribute.prototype.isSelectedChanged = function isSelectedChanged() {
          this.setClass();

          if (this.row.$isSelected) {
            if (this.mode === 'single') {
              this.deselectAll();
            }

            this.dispatchSelectedEvent();
          }
        };

        AutSelectCustomAttribute.prototype.deselectAll = function deselectAll() {
          var _this3 = this;

          this.auTable.data.forEach(function (item) {
            if (item !== _this3.row) {
              item.$isSelected = false;
            }
          });
        };

        return AutSelectCustomAttribute;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'row', [_dec2], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mode', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 'single';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'selectedClass', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 'aut-row-selected';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'custom', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _export('AutSelectCustomAttribute', AutSelectCustomAttribute);
    }
  };
});