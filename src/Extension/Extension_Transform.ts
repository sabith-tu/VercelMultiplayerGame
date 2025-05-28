declare global {
    interface HTMLElement {
        transform(value: string): this;

        transformOrigin(value: string): this;

        transformStyle(value: string): this;

        perspective(value: string): this;

        perspectiveOrigin(value: string): this;

        position(value: string): this;

        resize(value: string): this;
    }
}

export function Extension_Transform() {
    HTMLElement.prototype.transform = function (value: string) {
        this.style.transform = value;
        return this;
    };

    HTMLElement.prototype.transformOrigin = function (value: string) {
        this.style.transformOrigin = value;
        return this;
    };

    HTMLElement.prototype.transformStyle = function (value: string) {
        this.style.transformStyle = value;
        return this;
    };

    HTMLElement.prototype.perspective = function (value: string) {
        this.style.perspective = value;
        return this;
    };

    HTMLElement.prototype.perspectiveOrigin = function (value: string) {
        this.style.perspectiveOrigin = value;
        return this;
    };

    HTMLElement.prototype.position = function (value: string) {
        this.style.position = value;
        return this;
    };

    HTMLElement.prototype.resize = function (value: string) {
        this.style.resize = value;
        return this;
    };
}