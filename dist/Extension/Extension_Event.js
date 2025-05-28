export function Extension_Event() {
    HTMLElement.prototype.onHover = function (onHover, onUnHover) {
        this.addEventListener("mouseenter", () => onHover(this));
        this.addEventListener("mouseleave", () => onUnHover(this));
        return this;
    };
}
