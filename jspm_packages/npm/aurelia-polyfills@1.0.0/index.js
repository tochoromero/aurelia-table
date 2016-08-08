/* */ 
define(['exports', './aurelia-polyfills'], function (exports, _aureliaPolyfills) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaPolyfills).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaPolyfills[key];
      }
    });
  });
});