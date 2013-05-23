describe("AppController", function() {

  it("should change active_background", function() {
    var scope = {};
        ctrl = new AppController(scope);
    ctrl.changeBg("bg2")
    expect(scope.active_background).toBe("bg2")
  });

});