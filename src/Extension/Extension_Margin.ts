declare global {
    interface HTMLElement {
        noMargin(): this;

        marginS(value: string): this;

        marginBottomS(value: string): this;

        marginLeftS(value: string): this;

        marginRightS(value: string): this;

        marginTopS(value: string): this;

        marginTopBottomS(value: string): this;

        marginLeftRightS(value: string): this;

        margin(value: number): this;

        marginBottom(value: number): this;

        marginLeft(value: number): this;

        marginRight(value: number): this;

        marginTop(value: number): this;

        marginTopBottom(value: number): this;

        marginLeftRight(value: number): this;

    }
}


export function Extension_Margin() {

    HTMLElement.prototype.noMargin = function (): HTMLElement {
        this.style.margin = "0px";
        return this;
    };

    StringBased();
    PixelBased();

    function StringBased() {
        HTMLElement.prototype.marginS = function (value: string): HTMLElement {
            this.style.margin = value;
            return this;
        };

        HTMLElement.prototype.marginBottomS = function (value: string): HTMLElement {
            this.style.marginBottom = value;
            return this;
        };

        HTMLElement.prototype.marginLeftS = function (value: string): HTMLElement {
            this.style.marginLeft = value;
            return this;
        };

        HTMLElement.prototype.marginRightS = function (value: string): HTMLElement {
            this.style.marginRight = value;
            return this;
        };

        HTMLElement.prototype.marginTopS = function (value: string): HTMLElement {
            this.style.marginTop = value;
            return this;
        };

        HTMLElement.prototype.marginTopBottomS = function (value: string): HTMLElement {
            this.marginTopS(value).marginBottomS(value);
            return this;
        };

        HTMLElement.prototype.marginLeftRightS = function (value: string): HTMLElement {
            this.marginLeftS(value).marginRightS(value);
            return this;
        };
    }

    function PixelBased() {
        HTMLElement.prototype.margin = function (value: number): HTMLElement {
            this.style.margin = value + "px";
            return this;
        };

        HTMLElement.prototype.marginBottom = function (value: number): HTMLElement {
            this.style.marginBottom = value + "px";
            return this;
        };

        HTMLElement.prototype.marginLeft = function (value: number): HTMLElement {
            this.style.marginLeft = value + "px";
            return this;
        };

        HTMLElement.prototype.marginRight = function (value: number): HTMLElement {
            this.style.marginRight = value + "px";
            return this;
        };

        HTMLElement.prototype.marginTop = function (value: number): HTMLElement {
            this.style.marginTop = value + "px";
            return this;
        };

        HTMLElement.prototype.marginTopBottom = function (value: number): HTMLElement {
            this.marginTop(value).marginBottom(value);
            return this;
        };

        HTMLElement.prototype.marginLeftRight = function (value: number): HTMLElement {
            this.marginLeft(value).marginRight(value);
            return this;
        };
    }
}