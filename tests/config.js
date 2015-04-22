var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/\.spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/dist',

    // aliases
    paths: {
      jquery: "vendor/jquery/dist/jquery",
      angular: "vendor/angular/angular",
      mocks: "vendor/angular-mocks/angular-mocks",
      router: "vendor/angular-ui-router/release/angular-ui-router",
      app: "app/_app",
      modules: "modules",
      lazy: "app/_app",
      base: "base",
      utils: "utils"
    },

    // shim globals where necessary
    shim: {
      jquery: {
        exports: "$"
      },
      angular: {
        exports: "angular",
        deps: ["jquery"]
      },
      router: ["angular"],
      mocks: ["angular"]
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});