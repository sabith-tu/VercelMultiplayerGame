declare global {
    interface HTMLElement {
        color(value: string): this;
    }
}

export function Extension_Color() {


    HTMLElement.prototype.color = function (value: string): HTMLElement {
        this.style.color = value;
        return this;
    };
}