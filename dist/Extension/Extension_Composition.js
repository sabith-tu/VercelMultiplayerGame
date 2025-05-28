export function Extension_Composition() {
}
export function Row(...elements) {
    let divElement = document.createElement("div");
    divElement.display("flex");
    for (let i = 0; i < arguments.length; i++) {
        divElement.appendChild(arguments[i]);
    }
    return divElement;
}
export function Column(...elements) {
    let divElement = document.createElement("div");
    divElement.display("flex").flexDirection("column");
    for (let i = 0; i < arguments.length; i++) {
        divElement.appendChild(arguments[i]);
    }
    return divElement;
}
export function Create() {
    let divElement = document.createElement("div");
    divElement.boxSizing("border-box").displayFlex();
    if (arguments.length === 0)
        return divElement;
    if (arguments.length === 1) {
        divElement.appendChild(arguments[0]);
        return divElement;
    }
    for (let i = 0; i < arguments.length; i++) {
        divElement.appendChild(arguments[i]);
    }
    return divElement;
}
export function Rectangle(width = 100, height = 100, color = "white") {
    return Create().fixedSize(width, height).backgroundColor(color);
}
