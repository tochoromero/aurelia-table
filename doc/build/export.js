// this file provides a list of unbundled files that
// need to be included when exporting the application
// for production.
module.exports = {
  'list': [
    'index.html',
    'config.js',
    'favicon.ico',
    'LICENSE',
    'jspm_packages/system.js',
    'jspm_packages/system-polyfills.js',
    'jspm_packages/system-csp-production.js',
    'styles/styles.css',
    'styles/prism.css',
    'data.json'
  ],
  // this section lists any jspm packages that have
  // unbundled resources that need to be exported.
  // these files are in versioned folders and thus
  // must be 'normalized' by jspm to get the proper
  // path.
  'normalize': [
    [
      'font-awesome',
      ['/css/font-awesome.min.css', '/fonts/*']
    ],
    [
      'bootstrap',
      ['/css/bootstrap.css']
    ],
    [
      'bluebird',
      ['/js/browser/bluebird.min.js']
    ]
  ]
};
