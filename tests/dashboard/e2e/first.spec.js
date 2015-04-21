"use strict";

describe("it", function () {
  it("should work", function () {
    browser.get("http://localhost:3000/#/dash");
    var text = element(by.css("#dash p"));
    var link = element(by.css("#dash a"));

    expect(text.getText()).toBe("hi");
    link.click();
    expect(text.getText()).toBe("something else");
  });
});
//# sourceMappingURL=first.spec.js.map