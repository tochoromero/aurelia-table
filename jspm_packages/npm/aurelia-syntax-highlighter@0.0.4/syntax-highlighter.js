/* */ 
define(['exports', 'aurelia-framework', 'prismjs'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SyntaxHighlighter = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var SyntaxHighlighter = exports.SyntaxHighlighter = (_dec = (0, _aureliaFramework.customAttribute)('au-syntax'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec(_class = _dec2(_class = function () {
    function SyntaxHighlighter(element) {
      _classCallCheck(this, SyntaxHighlighter);

      this.element = element;
    }

    SyntaxHighlighter.prototype.bind = function bind() {
      Prism.highlightElement(this.element);
    };

    return SyntaxHighlighter;
  }()) || _class) || _class);
});