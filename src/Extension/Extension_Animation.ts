declare global {
    interface HTMLElement {
        animation(value: string): this;

        animationDelay(value: string): this;

        animationDirection(value: string): this;

        animationDuration(value: string): this;

        animationFillMode(value: string): this;

        animationIterationCount(value: string): this;

        animationName(value: string): this;

        animationTimingFunction(value: string): this;

        animationPlayState(value: string): this;

        transition(value: string): this;

        transitionDef(): this;

        transitionProperty(value: string): this;

        transitionDuration(value: string): this;

        transitionTimingFunction(value: string): this;

        transitionDelay(value: string): this;
    }
}

export function Extension_Animation() {
    HTMLElement.prototype.animation = function (value: string): HTMLElement {
        this.style.animation = value;
        return this;
    };

    HTMLElement.prototype.animationDelay = function (value: string): HTMLElement {
        this.style.animationDelay = value;
        return this;
    };

    HTMLElement.prototype.animationDirection = function (value: string): HTMLElement {
        this.style.animationDirection = value;
        return this;
    };

    HTMLElement.prototype.animationDuration = function (value: string): HTMLElement {
        this.style.animationDuration = value;
        return this;
    };

    HTMLElement.prototype.animationFillMode = function (value: string): HTMLElement {
        this.style.animationFillMode = value;
        return this;
    };

    HTMLElement.prototype.animationIterationCount = function (value: string): HTMLElement {
        this.style.animationIterationCount = value;
        return this;
    };

    HTMLElement.prototype.animationName = function (value: string): HTMLElement {
        this.style.animationName = value;
        return this;
    };

    HTMLElement.prototype.animationTimingFunction = function (value: string): HTMLElement {
        this.style.animationTimingFunction = value;
        return this;
    };

    HTMLElement.prototype.animationPlayState = function (value: string): HTMLElement {
        this.style.animationPlayState = value;
        return this;
    };

    HTMLElement.prototype.transition = function (value: string): HTMLElement {
        this.style.transition = value;
        return this;
    };
    HTMLElement.prototype.transitionDef = function (): HTMLElement {
        this.transition("all 0.5s ease-in-out");
        return this;
    };

    HTMLElement.prototype.transitionProperty = function (value: string): HTMLElement {
        this.style.transitionProperty = value;
        return this;
    };

    HTMLElement.prototype.transitionDuration = function (value: string): HTMLElement {
        this.style.transitionDuration = value;
        return this;
    };

    HTMLElement.prototype.transitionTimingFunction = function (value: string): HTMLElement {
        this.style.transitionTimingFunction = value;
        return this;
    };

    HTMLElement.prototype.transitionDelay = function (value: string): HTMLElement {
        this.style.transitionDelay = value;
        return this;
    };
}