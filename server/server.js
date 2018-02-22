const express = require("express");


var app = express();


app.get("/", (req, res) => {
    res.status(200).send({
        error: "page not found"
    });
});


app.listen(3000);

module.exports.app = app;


app.get("/users", (req, res) => {
    res.status(200).send([{
        name: 'jon',
        age: 23
    }, {
        name: 'bill',
        age: 22
    }, {
        name: 'yu',
        age: 33
    }]);
});
