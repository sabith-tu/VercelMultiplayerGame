export function Extension_Color() {
    HTMLElement.prototype.color = function (value) {
        this.style.color = value;
        return this;
    };
}
