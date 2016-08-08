/* */ 
define(['exports', './aurelia-logging-console'], function (exports, _aureliaLoggingConsole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaLoggingConsole).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaLoggingConsole[key];
      }
    });
  });
});