/* */ 
define(['exports', './aurelia-templating-binding'], function (exports, _aureliaTemplatingBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaTemplatingBinding).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaTemplatingBinding[key];
      }
    });
  });
});