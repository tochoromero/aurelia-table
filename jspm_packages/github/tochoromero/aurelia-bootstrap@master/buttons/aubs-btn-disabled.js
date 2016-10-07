/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.AubsBtnDisabledCustomAttribute = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var AubsBtnDisabledCustomAttribute = exports.AubsBtnDisabledCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function () {
        function AubsBtnDisabledCustomAttribute(element) {
            var _this = this;

            _classCallCheck(this, AubsBtnDisabledCustomAttribute);

            this.element = element;

            this.clickedListener = function (e) {
                return _this.buttonClicked(e);
            };
        }

        AubsBtnDisabledCustomAttribute.prototype.attached = function attached() {
            this.isAttached = true;
            this.element.addEventListener('click', this.clickedListener);
            this.setClass();
        };

        AubsBtnDisabledCustomAttribute.prototype.detached = function detached() {
            this.element.removeEventListener('click', this.clickedListener);
        };

        AubsBtnDisabledCustomAttribute.prototype.valueChanged = function valueChanged() {
            if (this.isAttached) {
                this.setClass();
            }
        };

        AubsBtnDisabledCustomAttribute.prototype.buttonClicked = function buttonClicked(e) {
            if (this.value) {
                e.preventDefault();
            }
        };

        AubsBtnDisabledCustomAttribute.prototype.setClass = function setClass() {
            if (this.value) {
                this.element.classList.add("disabled");
                this.element.disabled = true;
            } else {
                this.element.classList.remove("disabled");
                this.element.disabled = false;
            }
        };

        return AubsBtnDisabledCustomAttribute;
    }()) || _class);
});