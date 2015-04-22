require.config({
  baseUrl: "../",
  paths: {
    jquery: "vendor/jquery/dist/jquery",
    angular: "vendor/angular/angular",
    router: "vendor/angular-ui-router/release/angular-ui-router",
    app: "app/app",
    modules: "modules",
    components: "components",
    lazy: "app/lazy",
    base: "base"
  },
  shim: {
    jquery: {
      exports: "$"
    },
    angular: {
      exports: "angular",
      deps: ["jquery"]
    },
    router: ["angular"]
  },
  deps: ["./bootstrap/init"]
});