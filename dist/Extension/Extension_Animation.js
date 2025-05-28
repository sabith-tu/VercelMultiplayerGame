export function Extension_Animation() {
    HTMLElement.prototype.animation = function (value) {
        this.style.animation = value;
        return this;
    };
    HTMLElement.prototype.animationDelay = function (value) {
        this.style.animationDelay = value;
        return this;
    };
    HTMLElement.prototype.animationDirection = function (value) {
        this.style.animationDirection = value;
        return this;
    };
    HTMLElement.prototype.animationDuration = function (value) {
        this.style.animationDuration = value;
        return this;
    };
    HTMLElement.prototype.animationFillMode = function (value) {
        this.style.animationFillMode = value;
        return this;
    };
    HTMLElement.prototype.animationIterationCount = function (value) {
        this.style.animationIterationCount = value;
        return this;
    };
    HTMLElement.prototype.animationName = function (value) {
        this.style.animationName = value;
        return this;
    };
    HTMLElement.prototype.animationTimingFunction = function (value) {
        this.style.animationTimingFunction = value;
        return this;
    };
    HTMLElement.prototype.animationPlayState = function (value) {
        this.style.animationPlayState = value;
        return this;
    };
    HTMLElement.prototype.transition = function (value) {
        this.style.transition = value;
        return this;
    };
    HTMLElement.prototype.transitionDef = function () {
        this.transition("all 0.5s ease-in-out");
        return this;
    };
    HTMLElement.prototype.transitionProperty = function (value) {
        this.style.transitionProperty = value;
        return this;
    };
    HTMLElement.prototype.transitionDuration = function (value) {
        this.style.transitionDuration = value;
        return this;
    };
    HTMLElement.prototype.transitionTimingFunction = function (value) {
        this.style.transitionTimingFunction = value;
        return this;
    };
    HTMLElement.prototype.transitionDelay = function (value) {
        this.style.transitionDelay = value;
        return this;
    };
}
