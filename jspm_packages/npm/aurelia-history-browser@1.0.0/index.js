/* */ 
define(['exports', './aurelia-history-browser'], function (exports, _aureliaHistoryBrowser) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaHistoryBrowser).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaHistoryBrowser[key];
      }
    });
  });
});