const expect = require("expect");



describe("App", () => {

    it("should call spy correctly", () => {
        var spy = expect.createSpy();
        // spy();
        expect(spy).toHaveBeenCalled()
    });
});
