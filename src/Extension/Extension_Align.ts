declare global {
    interface HTMLElement {
        alignContent(value: string): this;

        alignItems(value: string): this;

        alignSelf(value: string): this;

        bottom(value: string): this;

        right(value: string): this;

        top(value: string): this;

        columnCount(value: string): this;

        columnFill(value: string): this;

        columnGap(value: string): this;

        columnRule(value: string): this;

        columnRuleColor(value: string): this;

        columnRuleStyle(value: string): this;

        columnRuleWidth(value: string): this;

        columns(value: string): this;

        columnSpan(value: string): this;

        columnWidth(value: string): this;

        justifyContent(value: string): this;

        left(value: string): this;

        verticalAlign(value: string): this;

        zIndex(value: string): this;

        direction(value: string): this;

        imageOrientation(value: string): this;

        objectFit(value: string): this;
    }
}

export function Extension_Align() {

    HTMLElement.prototype.alignContent = function (value: string): HTMLElement {
        this.style.alignContent = value;
        return this;
    };

    HTMLElement.prototype.alignItems = function (value: string): HTMLElement {
        this.style.alignItems = value;
        return this;
    };

    HTMLElement.prototype.alignSelf = function (value: string): HTMLElement {
        this.style.alignSelf = value;
        return this;
    };

    HTMLElement.prototype.bottom = function (value: string): HTMLElement {
        this.style.bottom = value;
        return this;
    };

    HTMLElement.prototype.right = function (value: string): HTMLElement {
        this.style.right = value;
        return this;
    };

    HTMLElement.prototype.top = function (value: string): HTMLElement {
        this.style.top = value;
        return this;
    };

    HTMLElement.prototype.columnCount = function (value: string): HTMLElement {
        this.style.columnCount = value;
        return this;
    };

    HTMLElement.prototype.columnFill = function (value: string): HTMLElement {
        this.style.columnFill = value;
        return this;
    };

    HTMLElement.prototype.columnGap = function (value: string): HTMLElement {
        this.style.columnGap = value;
        return this;
    };

    HTMLElement.prototype.columnRule = function (value: string): HTMLElement {
        this.style.columnRule = value;
        return this;
    };

    HTMLElement.prototype.columnRuleColor = function (value: string): HTMLElement {
        this.style.columnRuleColor = value;
        return this;
    };

    HTMLElement.prototype.columnRuleStyle = function (value: string): HTMLElement {
        this.style.columnRuleStyle = value;
        return this;
    };

    HTMLElement.prototype.columnRuleWidth = function (value: string): HTMLElement {
        this.style.columnRuleWidth = value;
        return this;
    };

    HTMLElement.prototype.columns = function (value: string): HTMLElement {
        this.style.columns = value;
        return this;
    };

    HTMLElement.prototype.columnSpan = function (value: string): HTMLElement {
        this.style.columnSpan = value;
        return this;
    };

    HTMLElement.prototype.columnWidth = function (value: string): HTMLElement {
        this.style.columnWidth = value;
        return this;
    };

    HTMLElement.prototype.justifyContent = function (value: string): HTMLElement {
        this.style.justifyContent = value;
        return this;
    };

    HTMLElement.prototype.left = function (value: string): HTMLElement {
        this.style.left = value;
        return this;
    };

    HTMLElement.prototype.verticalAlign = function (value: string): HTMLElement {
        this.style.verticalAlign = value;
        return this;
    };

    HTMLElement.prototype.zIndex = function (value: string): HTMLElement {
        this.style.zIndex = value;
        return this;
    };

    HTMLElement.prototype.direction = function (value: string): HTMLElement {
        this.style.direction = value;
        return this;
    };

    HTMLElement.prototype.imageOrientation = function (value: string): HTMLElement {
        this.style.imageOrientation = value;
        return this;
    };

    HTMLElement.prototype.objectFit = function (value: string): HTMLElement {
        this.style.objectFit = value;
        return this;
    };


}
