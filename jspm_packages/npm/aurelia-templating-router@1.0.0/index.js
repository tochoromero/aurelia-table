/* */ 
define(['exports', './aurelia-templating-router'], function (exports, _aureliaTemplatingRouter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaTemplatingRouter).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaTemplatingRouter[key];
      }
    });
  });
});