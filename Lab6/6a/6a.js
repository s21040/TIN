function convertDegree() {

    const celsiusInput = document.querySelector("#first");
    const fahrenheitInput = document.querySelector("#second");
    const celsius = parseInt(celsiusInput.value);
    const fahrenheit = parseInt(fahrenheitInput.value);
    console.log(celsius, fahrenheit);

    switch (celsius || fahrenheit) {
        case celsius:
            fahrenheitInput.value = (celsius * 9 / 5) + 32;
            break;
        case fahrenheit:
            celsiusInput.value = (fahrenheit - 32) * (5 / 9);
            break;
        default:
            console.log("Empty inputs")
    }
}