function calc() {
    const data = {
        num1: document.querySelector("#input1").value,
        num2: document.querySelector("#input2").value,
        func: document.querySelector("select").value
    };


    const xhr = new window.XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            const obj = JSON.parse(xhr.responseText);
            document.querySelector("textarea").value = "First number: " + obj[0].num1
                + "\nSecond number: " + obj[0].num2 + "\nOperation type: " + obj[0].operation
                + "\nResult: " + obj[0].res;
        }
    };


    xhr.open("POST", "http://localhost:5000/calculator", true);

    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.send(JSON.stringify(data));
}