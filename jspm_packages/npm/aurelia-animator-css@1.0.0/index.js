/* */ 
define(['exports', './aurelia-animator-css'], function (exports, _aureliaAnimatorCss) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaAnimatorCss).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaAnimatorCss[key];
      }
    });
  });
});