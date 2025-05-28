declare global {
    interface HTMLElement {
        onHover(onHover: (element: HTMLElement) => void, onUnHover: (element: HTMLElement) => void): this;
    }
}

export function Extension_Event() {


    HTMLElement.prototype.onHover = function (onHover: (element: HTMLElement) => void, onUnHover: (element: HTMLElement) => void): HTMLElement {
        this.addEventListener("mouseenter", () => onHover(this))
        this.addEventListener("mouseleave", () => onUnHover(this))
        return this;
    };
}