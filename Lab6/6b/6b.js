setTimeout(appendElement, 5000);

function appendElement() {
    var element = document.createElement("p");
    var text = document.createTextNode("Text in 5 seconds!");
    element.appendChild(text);
    var body = document.querySelector("body");
    body.appendChild(element);
}
