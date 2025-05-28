export function Extension_Background() {
    HTMLElement.prototype.background = function (value) {
        this.style.background = value;
        return this;
    };
    HTMLElement.prototype.backgroundAttachment = function (value) {
        this.style.backgroundAttachment = value;
        return this;
    };
    HTMLElement.prototype.backgroundColor = function (value) {
        this.style.backgroundColor = value;
        return this;
    };
    HTMLElement.prototype.backgroundImage = function (value) {
        this.style.backgroundImage = value;
        return this;
    };
    HTMLElement.prototype.backgroundPosition = function (value) {
        this.style.backgroundPosition = value;
        return this;
    };
    HTMLElement.prototype.backgroundRepeat = function (value) {
        this.style.backgroundRepeat = value;
        return this;
    };
    HTMLElement.prototype.backgroundClip = function (value) {
        this.style.backgroundClip = value;
        return this;
    };
    HTMLElement.prototype.backgroundOrigin = function (value) {
        this.style.backgroundOrigin = value;
        return this;
    };
    HTMLElement.prototype.backgroundSize = function (value) {
        this.style.backgroundSize = value;
        return this;
    };
}
