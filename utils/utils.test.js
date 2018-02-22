const expect = require("expect");
const utils = require("./utils");


describe("Utils", () => {

    it("should add two numbers", () => {
        var res = utils.add(33, 11);

        expect(res).toBe(44).toBeA("number");
    });


    it("should square a number", () => {
        var res = utils.square(4);

        expect(res).toBe(16).toBeA("number");
    });

    describe("sync-stuff", () => {
        it("it should async add two numbers", (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA("number");
                done();
            });
        });


        it("should aynsc Square a number", (done) => {
            utils.asyncSquare(5, (res) => {
                expect(res).toBe(25).toBeA("number");
                done();
            });
        });
    })

});




// it("should have first and last names", () => {
//     var user = {
//         location: "Sydney",
//         Weather: "Sunny"
//     };
// });




// it("should expect some values", () => {
//     expect(12).toNotBe(12);
//     expect([2, 3, 4]).toExclude(1);
//     expect({
//         name: "Andrew",
//         age: 28,
//         location: "PA"
//     }).toInclude({
//         age: 28
//     });
// });
