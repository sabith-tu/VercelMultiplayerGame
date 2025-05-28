declare global {
    interface HTMLElement {
        background(value: string): this;

        backgroundAttachment(value: string): this;

        backgroundColor(value: string): this;

        backgroundImage(value: string): this;

        backgroundPosition(value: string): this;

        backgroundRepeat(value: string): this;

        backgroundClip(value: string): this;

        backgroundOrigin(value: string): this;

        backgroundSize(value: string): this;
    }
}

export function Extension_Background() {
    HTMLElement.prototype.background = function (value: string): HTMLElement {
        this.style.background = value;
        return this;
    };

    HTMLElement.prototype.backgroundAttachment = function (value: string): HTMLElement {
        this.style.backgroundAttachment = value;
        return this;
    };

    HTMLElement.prototype.backgroundColor = function (value: string): HTMLElement {
        this.style.backgroundColor = value;
        return this;
    };

    HTMLElement.prototype.backgroundImage = function (value: string): HTMLElement {
        this.style.backgroundImage = value;
        return this;
    };

    HTMLElement.prototype.backgroundPosition = function (value: string): HTMLElement {
        this.style.backgroundPosition = value;
        return this;
    };

    HTMLElement.prototype.backgroundRepeat = function (value: string): HTMLElement {
        this.style.backgroundRepeat = value;
        return this;
    };

    HTMLElement.prototype.backgroundClip = function (value: string): HTMLElement {
        this.style.backgroundClip = value;
        return this;
    };

    HTMLElement.prototype.backgroundOrigin = function (value: string): HTMLElement {
        this.style.backgroundOrigin = value;
        return this;
    };

    HTMLElement.prototype.backgroundSize = function (value: string): HTMLElement {
        this.style.backgroundSize = value;
        return this;
    };
}