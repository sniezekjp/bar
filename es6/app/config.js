require.config({
  baseUrl: '../',
  paths: {
    jquery  : 'vendor/jquery/dist/jquery',
    angular : 'vendor/angular/angular',
    router  : 'vendor/angular-ui-router/release/angular-ui-router',
    app     : 'app/app',
    modules : 'modules',
    lazy    : 'app/lazy'
  },
  shim: {
    jquery: {
      exports: '$'
    },
    angular: {
      exports: 'angular',
      deps: ['jquery']
    },
    router: ['angular']
  },
  deps: ['../app/bootstrap']
});