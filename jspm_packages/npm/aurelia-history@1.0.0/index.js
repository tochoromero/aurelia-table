/* */ 
define(['exports', './aurelia-history'], function (exports, _aureliaHistory) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaHistory).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaHistory[key];
      }
    });
  });
});