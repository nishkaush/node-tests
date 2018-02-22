const request = require("supertest");
const app = require("./server").app;


it("should give the string response", (done) => {
    request(app)
        .get("/")
        .expect(200)
        .expect({
            error: "page not found"
        })
        .end(done);
});


it("you should return something useful", (done) => {
    request(app)
        .get("/users")
        .expect(200)
        .expect([{
            name: 'jon',
            age: 23
        }, {
            name: 'bill',
            age: 22
        }, {
            name: 'yu',
            age: 33
        }])
        .end(done);
});
