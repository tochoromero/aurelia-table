/* */ 
define(['exports', './syntax-highlighter'], function (exports, _syntaxHighlighter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = exports.SyntaxHighlighter = undefined;


  function configure(config) {
    config.globalResources('./syntax-highlighter');
  }

  exports.SyntaxHighlighter = _syntaxHighlighter.SyntaxHighlighter;
  exports.configure = configure;
});