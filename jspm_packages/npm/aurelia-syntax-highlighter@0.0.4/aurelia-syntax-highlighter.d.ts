declare module 'aurelia-syntax-highlighter' {
  import 'prismjs';
  import {
    customAttribute,
    inject
  } from 'aurelia-framework';
  export class SyntaxHighlighter {
    constructor(element?: any);
    bind(): any;
  }
}