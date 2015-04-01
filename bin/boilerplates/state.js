  .state('_module', {
    url: '/_module',
    templateUrl: 'modules/_module/views/_module.tpl.html',
    controller: 'MODULEController as ctrl',
    resolve: {
      lazy: function(Lazy) {
        return Lazy.load('modules/_module/controllers/MODULEController');
      }
    }
  })