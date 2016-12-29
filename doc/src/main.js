import 'fetch';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-syntax-highlighter')
    .plugin('aurelia-table')
    .plugin('aurelia-bootstrap');

  aurelia.start().then(() => aurelia.setRoot());
}
