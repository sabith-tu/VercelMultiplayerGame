declare global {
    interface HTMLElement {
        flex(value: string): this;

        flexBasis(value: string): this;

        flexDirection(value: string): this;

        flexFlow(value: string): this;

        flexGrow(value: string): this;

        flexShrink(value: string): this;

        flexWrap(value: string): this;

        flexColumn(value: string): this;

        flexRow(value: string): this;

        flexExpand(): this;
    }
}

export function Extension_Flex() {
    HTMLElement.prototype.flex = function (value: string): HTMLElement {
        this.style.flex = value;
        return this;
    };

    HTMLElement.prototype.flexBasis = function (value: string): HTMLElement {
        this.style.flexBasis = value;
        return this;
    };

    HTMLElement.prototype.flexDirection = function (value: string): HTMLElement {
        this.style.flexDirection = value;
        return this;
    };

    HTMLElement.prototype.flexFlow = function (value: string): HTMLElement {
        this.style.flexFlow = value;
        return this;
    };

    HTMLElement.prototype.flexGrow = function (value: string): HTMLElement {
        this.style.flexGrow = value;
        return this;
    };

    HTMLElement.prototype.flexShrink = function (value: string): HTMLElement {
        this.style.flexShrink = value;
        return this;
    };

    HTMLElement.prototype.flexWrap = function (value: string): HTMLElement {
        this.style.flexWrap = value;
        return this;
    };


    HTMLElement.prototype.flexColumn = function (): HTMLElement {
        this.style.flexDirection = "column";
        return this;
    };

    HTMLElement.prototype.flexRow = function (): HTMLElement {
        this.style.flexDirection = "row";
        return this;
    };

    HTMLElement.prototype.flexExpand = function (): HTMLElement {
        this.style.flexGrow = "1";
        return this;
    };


}