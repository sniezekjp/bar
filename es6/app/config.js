require.config({
  baseUrl: '../',
  paths: {
    jquery  : 'vendor/jquery/dist/jquery',
    angular : 'vendor/angular/angular',
    router  : 'vendor/angular-ui-router/release/angular-ui-router',
    app     : 'app/app',
    modules : 'modules',
    lazy    : 'app/lazy',
    base    : 'base',
    handson : 'vendor/handsontable/dist/handsontable',
    uihandson : 'vendor/angular-ui-handsontable/dist/ngHandsontable'
  },
  shim: {
    jquery: {
      exports: '$'
    },
    angular: {
      exports: 'angular',
      deps: ['jquery']
    },
    router: ['angular', 'uihandson'],
    uihandson: ['angular', 'handson']
  },
  deps: ['../app/bootstrap']
});