module.exports = {
  'bundles': {
    'dist/app-build': {
      'includes': [
        '[**/*.js]',
        '**/*.html!text',
        '**/*.css!text'
      ],
      'options': {
        'inject': true,
        'minify': true,
        'depCache': true,
        'rev': false
      }
    },
    'dist/aurelia': {
      'includes': [
        'aurelia-bootstrap',
        'aurelia-bootstrap/**/*.html!text',
        'aurelia-bootstrapper',
        'aurelia-fetch-client',
        'aurelia-framework',
        'aurelia-history-browser',
        'aurelia-loader-default',
        'aurelia-logging-console',
        'aurelia-polyfills',
        'aurelia-router',
        'aurelia-syntax-highlighter',
        'aurelia-table',
        'aurelia-table/*.html!text',
        'aurelia-templating-binding',
        'aurelia-templating-resources',
        'aurelia-templating-router',
        'fetch',
        'jquery',
        'text'
      ],
      'options': {
        'inject': true,
        'minify': true,
        'depCache': false,
        'rev': false
      }
    }
  }
};
