/* */
define(["exports", "aurelia-framework", "../utils/tooltip-service"], function (exports, _aureliaFramework, _tooltipService) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.AubsPopoverCustomAttribute = undefined;

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

    var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

    var AubsPopoverCustomAttribute = exports.AubsPopoverCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element, _tooltipService.TooltipService), _dec2 = (0, _aureliaFramework.bindable)({defaultBindingMode: _aureliaFramework.bindingMode.twoWay}), _dec(_class = (_class2 = function () {
        function AubsPopoverCustomAttribute(element, tooltipService) {
            var _this = this;

            _classCallCheck(this, AubsPopoverCustomAttribute);

            _initDefineProp(this, "title", _descriptor, this);

            _initDefineProp(this, "text", _descriptor2, this);

            _initDefineProp(this, "position", _descriptor3, this);

            _initDefineProp(this, "disabled", _descriptor4, this);

            _initDefineProp(this, "open", _descriptor5, this);

            _initDefineProp(this, "trigger", _descriptor6, this);

            _initDefineProp(this, "customModel", _descriptor7, this);

            this.triggers = [];
            this.validPositions = ['top', 'bottom', 'left', 'right'];
            this.valuesChanged = false;
            this.visible = false;

            this.element = element;
            this.tooltipService = tooltipService;

            this.listeners = {
                in: function _in() {
                    return _this.handleShow();
                },
                out: function out() {
                    return _this.handleHide();
                },
                click: function click() {
                    _this.visible ? _this.handleHide() : _this.handleShow();
                },
                outside: function outside(event) {
                    return _this.handleOutside(event);
                },
                resize: function resize() {
                    return _this.resizeThrottler();
                }
            };
        }

        AubsPopoverCustomAttribute.prototype.bind = function bind() {
            if (!this.validPositions.includes(this.position)) {
                this.position = 'top';
            }

            this.triggers = this.trigger.split(' ');
        };

        AubsPopoverCustomAttribute.prototype.attached = function attached() {
            this.tooltipService.setTriggers(this.element, this.triggers, this.listeners);

            this.attached = true;
            if (this.open) {
                this.handleShow();
            }
        };

        AubsPopoverCustomAttribute.prototype.detached = function detached() {
            this.tooltipService.removeTriggers(this.element, this.triggers, this.listeners);
        };

        AubsPopoverCustomAttribute.prototype.openChanged = function openChanged() {
            if (!this.attached) {
                return;
            }

            if (this.open) {
                this.handleShow();
            } else {
                this.handleHide();
            }
        };

        AubsPopoverCustomAttribute.prototype.titleChanged = function titleChanged() {
            this.valuesChanged = true;
        };

        AubsPopoverCustomAttribute.prototype.textChanged = function textChanged() {
            this.valuesChanged = true;
        };

        AubsPopoverCustomAttribute.prototype.positionChanged = function positionChanged(newValue, oldValue) {
            if (!this.validPositions.includes(newValue)) {
                this.position = oldValue;
                return;
            }

            this.valuesChanged = true;
        };

        AubsPopoverCustomAttribute.prototype.handleShow = function handleShow() {
            if (this.visible || this.disabled) {
                return;
            }

            if (!this.popover || this.valuesChanged) {
                this.createPopover();
                this.valuesChanged = false;
            }

            document.body.appendChild(this.popover);
            this.popover.setAttribute("style", "display: block;");

            var position = this.tooltipService.calculatePosition(this.element, this.popover, this.position);
            this.popover.setAttribute("style", "top: " + position.top + "px; left: " + position.left + "px; display: block;");

            this.popover.classList.add('in');
            this.visible = true;
            this.open = true;

            window.addEventListener('resize', this.listeners.resize);
        };

        AubsPopoverCustomAttribute.prototype.resizeThrottler = function resizeThrottler() {
            var _this2 = this;

            if (!this.visible) {
                return;
            }

            if (!this.resizeTimeout) {
                this.resizeTimeout = setTimeout(function () {
                    _this2.resizeTimeout = null;
                    _this2.handleResize();
                }, 66);
            }
        };

        AubsPopoverCustomAttribute.prototype.handleResize = function handleResize() {
            var position = this.tooltipService.calculatePosition();
            this.popover.setAttribute("style", "top: " + position.top + "px; left: " + position.left + "px");
        };

        AubsPopoverCustomAttribute.prototype.handleHide = function handleHide() {
            if (!this.visible) {
                return;
            }

            this.popover.classList.remove('in');
            document.body.removeChild(this.popover);
            this.visible = false;
            this.open = false;

            window.removeEventListener('resize', this.listeners.resize);
        };

        AubsPopoverCustomAttribute.prototype.handleOutside = function handleOutside(event) {
            if (!this.visible) {
                return;
            }

            if (this.element !== event.target && !this.popover.contains(event.target)) {
                this.handleHide();
            }
        };

        AubsPopoverCustomAttribute.prototype.createPopover = function createPopover() {
            if (this.customModel) {
                this.popover = this.customModel;
                this.popover.classList.add(this.position);
                return;
            }

            if (this.popover) {
                document.body.removeChild(this.popover);
            }

            this.popover = document.createElement('div');
            this.popover.classList.add('popover');
            this.popover.classList.add(this.position);

            var arrow = document.createElement('div');
            arrow.classList.add('arrow');
            this.popover.appendChild(arrow);

            if (this.title) {
                var title = document.createElement('h3');
                title.classList.add('popover-title');
                var titleText = document.createTextNode(this.title);
                title.appendChild(titleText);
                this.popover.appendChild(title);
            }

            var content = document.createElement('div');
            content.classList.add('popover-content');
            var contentParagraph = document.createElement('p');
            var text = document.createTextNode(this.text);
            contentParagraph.appendChild(text);
            content.appendChild(contentParagraph);
            this.popover.appendChild(content);
        };

        return AubsPopoverCustomAttribute;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "title", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "text", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "position", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return 'top';
        }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "disabled", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "open", [_dec2], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "trigger", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return 'mouseover';
        }
    }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "customModel", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    })), _class2)) || _class);
});