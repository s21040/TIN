const express = require("express");
const main = express();
const path = require("path");
const bodyParser = require("body-parser");
const url = require('url');
const fs = require('fs');

function renderHTML(path, resp) {
    fs.readFile(path, null, function(err, data) {
        if (err) {
            resp.writeHead(404);
            resp.write('ERROR : file not found!');
        } else {
            resp.write(data);
        }
        resp.end();
    });
}
main.use(express.json());
main.use(bodyParser.urlencoded({ extended: false }));
main.get('/hello', (req, resp) => {
    resp.send("hello world");
});
main.get('/form', (req, resp) => {
    renderHTML('./form.html', resp);
});
main.post('/formdata', (req, resp) => {
    resp.send({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    });
});
main.post('/jsondata', (req, resp) => {
    resp.send(
        ` data json: \n username: ${req.body.username}  \n password: ${req.body.password} \n email: ${req.body.email}`
    );
});
const port = process.env.PORT || 5000;
main.listen(port);
