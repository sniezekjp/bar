define(["exports", "router", "lazy", "angular", "../components/components", "modules/dashboard/states", "modules/analysis/states", "modules/search/states", "modules/email/states", "modules/form/states", "modules/quiz/states", "modules/survey/states", "modules/quartermaster/states", "modules/social-media/states"], function (exports, _router, _lazy, _angular, _componentsComponents, _modulesDashboardStates, _modulesAnalysisStates, _modulesSearchStates, _modulesEmailStates, _modulesFormStates, _modulesQuizStates, _modulesSurveyStates, _modulesQuartermasterStates, _modulesSocialMediaStates) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var router = _interopRequire(_router);

  var lazy = _interopRequire(_lazy);

  var angular = _interopRequire(_angular);

  var components = _interopRequire(_componentsComponents);

  var dashboard = _interopRequire(_modulesDashboardStates);

  var analysis = _interopRequire(_modulesAnalysisStates);

  var search = _interopRequire(_modulesSearchStates);

  var email = _interopRequire(_modulesEmailStates);

  var form = _interopRequire(_modulesFormStates);

  var quiz = _interopRequire(_modulesQuizStates);

  var survey = _interopRequire(_modulesSurveyStates);

  var quartermaster = _interopRequire(_modulesQuartermasterStates);

  var socialmedia = _interopRequire(_modulesSocialMediaStates);

  /// dependencies (do not remove)

  angular.element(document).ready(function () {
    angular.bootstrap(document, ["app"]);
  });
});
//# sourceMappingURL=bootstrap.js.map