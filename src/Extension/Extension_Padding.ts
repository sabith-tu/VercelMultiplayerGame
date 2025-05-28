declare global {
    interface HTMLElement {
        noPadding(): this;

        paddingS(value: string): this;

        paddingBottomS(value: string): this;

        paddingLeftS(value: string): this;

        paddingRightS(value: string): this;

        paddingTopS(value: string): this;

        paddingTopBottomS(value: string): this;

        paddingLeftRightS(value: string): this;

        padding(value: number): this;

        paddingBottom(value: number): this;

        paddingLeft(value: number): this;

        paddingRight(value: number): this;

        paddingTop(value: number): this;

        paddingTopBottom(value: number): this;

        paddingLeftRight(value: number): this;

    }
}

export function Extension_Padding() {

    HTMLElement.prototype.noPadding = function (): HTMLElement {
        this.style.padding = "0px";
        return this;
    };

    StringBased();
    PixelBased();

    function StringBased() {
        HTMLElement.prototype.paddingS = function (value: string): HTMLElement {
            this.style.padding = value;
            return this;
        };

        HTMLElement.prototype.paddingBottomS = function (value: string): HTMLElement {
            this.style.paddingBottom = value;
            return this;
        };

        HTMLElement.prototype.paddingLeftS = function (value: string): HTMLElement {
            this.style.paddingLeft = value;
            return this;
        };

        HTMLElement.prototype.paddingRightS = function (value: string): HTMLElement {
            this.style.paddingRight = value;
            return this;
        };

        HTMLElement.prototype.paddingTopS = function (value: string): HTMLElement {
            this.style.paddingTop = value;
            return this;
        };

        HTMLElement.prototype.paddingTopBottomS = function (value: string): HTMLElement {
            this.paddingTopS(value).paddingBottomS(value);
            return this;
        };
        HTMLElement.prototype.paddingLeftRightS = function (value: string): HTMLElement {
            this.paddingLeftS(value).paddingRightS(value);
            return this;
        };
    }

    function PixelBased() {
        HTMLElement.prototype.padding = function (value: number): HTMLElement {
            this.style.padding = value + "px";
            return this;
        };

        HTMLElement.prototype.paddingBottom = function (value: number): HTMLElement {
            this.style.paddingBottom = value + "px";
            return this;
        };

        HTMLElement.prototype.paddingLeft = function (value: number): HTMLElement {
            this.style.paddingLeft = value + "px";
            return this;
        };

        HTMLElement.prototype.paddingRight = function (value: number): HTMLElement {
            this.style.paddingRight = value + "px";
            return this;
        };

        HTMLElement.prototype.paddingTop = function (value: number): HTMLElement {
            this.style.paddingTop = value + "px";
            return this;
        };

        HTMLElement.prototype.paddingTopBottom = function (value: number): HTMLElement {
            this.paddingTop(value).paddingBottom(value);
            return this;
        };
        HTMLElement.prototype.paddingLeftRight = function (value: number): HTMLElement {
            this.paddingLeft(value).paddingRight(value);
            return this;
        };
    }


}