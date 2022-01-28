const express = require("express");
const main = express();
main.use(express.json());

const Calc = function (num) {
    this.num = num;
};

main.use(function (req, resp, next) {
    resp.header('Access-Control-Allow-Origin', req.headers.origin);
    resp.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


const results = (function () {
    let results = [];
    return {
        add: function (obj) {
            results.push(obj);
        },
        get: function () {
            return results;
        },
        clear: function () {
            results = [];
        }
    };
})();


Calc.prototype = {
    add: function (number) {
        let result = Math.floor(this.num + number);
        results.add({num1: this.num,
            num2: number,
            operation: "add",
            res: result
        });
        this.num = result;
        return this;
    },
    multiply: function (number) {
        let result = (this.num * number);
        results.add({
            num1: this.num,
            num2: number,
            operation: "multiply",
            res: result
        });
        this.num = result;
        return this;
    },
    subtract: function (number) {
        let result = Math.floor(this.num - number);
        results.add({
            num1: this.num,
            num2: number,
            operation: "subtract",
            res: result
        });
        this.num = result;
        return this;
    },
    divide: function (number) {
        let result = (this.num / number);
        results.add({num1: this.num,
            num2: number,
            operation: "divide",
            res: result
        });
        return this;
    },
    clear: function () {
        this.num = 0;
        return this;
    }
};


main.post("/calculator", (req, resp) => {
    let num1 = parseInt(req.body.num1);
    let num2 = parseInt(req.body.num2);
    let func = req.body.func;
    let request = new Calc(num1);

    switch (func) {
        case "add":
            request.add(num2);
            break;
        case "mul":
            request.multiply(num2);
            break;
        case "sub":
            request.subtract(num2);
            break;
        case "div":
            request.divide(num2);
            break;
        default:
            results.clear();
            break;
    }

    let calcResult = results.get();
    resp.json(calcResult);
});

const port = process.env.PORT || 5000;
main.listen(port, () => console.log(`Listening on port ${port}`));