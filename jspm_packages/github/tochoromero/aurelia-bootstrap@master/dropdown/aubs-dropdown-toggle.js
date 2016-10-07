/* */ 
define(["exports", "aurelia-framework", "./aubs-dropdown"], function (exports, _aureliaFramework, _aubsDropdown) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.AubsDropdownToggleCustomAttribute = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var AubsDropdownToggleCustomAttribute = exports.AubsDropdownToggleCustomAttribute = (_dec = (0, _aureliaFramework.inject)(_aubsDropdown.AubsDropdownCustomAttribute, Element), _dec(_class = function () {
        function AubsDropdownToggleCustomAttribute(dropdown, element) {
            var _this = this;

            _classCallCheck(this, AubsDropdownToggleCustomAttribute);

            this.dropdown = dropdown;
            this.element = element;

            this.clickedListener = function () {
                return _this.dropdown.toggle();
            };
        }

        AubsDropdownToggleCustomAttribute.prototype.attached = function attached() {
            this.element.addEventListener('click', this.clickedListener);
        };

        AubsDropdownToggleCustomAttribute.prototype.detached = function detached() {
            this.element.removeEventListener('click', this.clickedListener);
        };

        return AubsDropdownToggleCustomAttribute;
    }()) || _class);
});