function operations(url, num1, num2) {
    if (url.includes("add")) {
        return num1 + num2;
    }
    if (url.includes("sub")) {
        return num1 - num2;
    }
    if (url.includes("div")) {
        return num1 / num2;
    }
    if (url.includes("mul")) {
        return num1 * num2;
    }
}

function check (num1, num2) {
    if(isNaN(num1) || isNaN(num2)) return false;
    else return true;
}

const http = require('http');
const url = require('url');

const server = http.createServer((request, res) => {
    const url_parts = url.parse(request.url, true);
    const query = url_parts.query;

    const num1 = parseInt(query.num1);
    const num2 = parseInt(query.num2);

    if(check(num1, num2) === true) {
        const result = operations(request.url, num1, num2);
        res.write(result);
        res.end();
    } else {
        res.write('error : invalid input');
        res.end();
    }
});

server.listen(8080);

console.log("Started");