export function Extension_Transform() {
    HTMLElement.prototype.transform = function (value) {
        this.style.transform = value;
        return this;
    };
    HTMLElement.prototype.transformOrigin = function (value) {
        this.style.transformOrigin = value;
        return this;
    };
    HTMLElement.prototype.transformStyle = function (value) {
        this.style.transformStyle = value;
        return this;
    };
    HTMLElement.prototype.perspective = function (value) {
        this.style.perspective = value;
        return this;
    };
    HTMLElement.prototype.perspectiveOrigin = function (value) {
        this.style.perspectiveOrigin = value;
        return this;
    };
    HTMLElement.prototype.position = function (value) {
        this.style.position = value;
        return this;
    };
    HTMLElement.prototype.resize = function (value) {
        this.style.resize = value;
        return this;
    };
}
