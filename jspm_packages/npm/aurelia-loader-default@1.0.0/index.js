/* */ 
define(['exports', './aurelia-loader-default'], function (exports, _aureliaLoaderDefault) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaLoaderDefault).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaLoaderDefault[key];
      }
    });
  });
});