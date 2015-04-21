define(["exports"], function (exports) {
  // PUBLISH DI MODULE
  "use strict";

  module.exports = {
    "preprocessor:ng-html2js": ["factory", require("./html2js")],
    // TODO(vojta): remove this in 0.11
    "preprocessor:html2js": ["factory", require("./html2js")]
  };
});
//# sourceMappingURL=index.js.map