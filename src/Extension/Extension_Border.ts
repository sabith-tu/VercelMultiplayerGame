declare global {
    interface HTMLElement {
        border(value: string): this;

        borderBottom(value: string): this;

        borderRight(value: string): this;

        borderTop(value: string): this;

        borderLeft(value: string): this;

        borderRadiusS(value: string): this;

        borderBottomLeftRadiusS(value: string): this;

        borderBottomRightRadiusS(value: string): this;

        borderTopLeftRadiusS(value: string): this;

        borderTopRightRadiusS(value: string): this;

        borderRadius(value: number): this;

        borderBottomLeftRadius(value: number): this;

        borderBottomRightRadius(value: number): this;

        borderTopLeftRadius(value: number): this;

        borderTopRightRadius(value: number): this;

        borderWidthS(value: string): this;

        borderBottomWidthS(value: string): this;

        borderRightWidthS(value: string): this;

        borderTopWidthS(value: string): this;

        borderLeftWidthS(value: string): this;

        borderImageWidthS(value: string): this;

        borderWidth(value: number): this;

        borderBottomWidth(value: number): this;

        borderRightWidth(value: number): this;

        borderTopWidth(value: number): this;

        borderLeftWidth(value: number): this;

        borderImageWidth(value: number): this;

        borderColor(value: string): this;

        borderBottomColor(value: string): this;

        borderLeftColor(value: string): this;

        borderRightColor(value: string): this;

        borderTopColor(value: string): this;

        borderImage(value: string): this;

        borderImageOutset(value: string): this;

        borderImageRepeat(value: string): this;

        borderImageSlice(value: string): this;

        borderImageSource(value: string): this;

        borderStyle(value: string): this;

        borderLeftStyle(value: string): this;

        borderBottomStyle(value: string): this;

        borderRightStyle(value: string): this;

        borderTopStyle(value: string): this;

        borderCollapse(value: string): this;

        borderSpacing(value: string): this;


    }
}


export function Extension_Border() {

    Border();
    BorderRadius();
    BorderWidth();
    BorderColor();
    BorderImage();
    BorderStyle();
    More();

    function Border() {
        HTMLElement.prototype.border = function (value: string): HTMLElement {
            this.style.border = value;
            return this;
        };
        HTMLElement.prototype.borderBottom = function (value: string): HTMLElement {
            this.style.borderBottom = value;
            return this;
        };
        HTMLElement.prototype.borderRight = function (value: string): HTMLElement {
            this.style.borderRight = value;
            return this;
        };
        HTMLElement.prototype.borderTop = function (value: string): HTMLElement {
            this.style.borderTop = value;
            return this;
        };
        HTMLElement.prototype.borderLeft = function (value: string): HTMLElement {
            this.style.borderLeft = value;
            return this;
        };
    }

    function BorderRadius() {
        HTMLElement.prototype.borderRadiusS = function (value: string): HTMLElement {
            this.style.borderRadius = value;
            return this;
        };
        HTMLElement.prototype.borderBottomLeftRadiusS = function (value: string): HTMLElement {
            this.style.borderBottomLeftRadius = value;
            return this;
        };
        HTMLElement.prototype.borderBottomRightRadiusS = function (value: string): HTMLElement {
            this.style.borderBottomRightRadius = value;
            return this;
        };
        HTMLElement.prototype.borderTopLeftRadiusS = function (value: string): HTMLElement {
            this.style.borderTopLeftRadius = value;
            return this;
        };
        HTMLElement.prototype.borderTopRightRadiusS = function (value: string): HTMLElement {
            this.style.borderTopRightRadius = value;
            return this;
        };
        //////////////////////////////////////////////////////////////////////////////////
        HTMLElement.prototype.borderRadius = function (value: number): HTMLElement {
            this.style.borderRadius = value + "px";
            return this;
        };
        HTMLElement.prototype.borderBottomLeftRadius = function (value: number): HTMLElement {
            this.style.borderBottomLeftRadius = value + "px";
            return this;
        };
        HTMLElement.prototype.borderBottomRightRadius = function (value: number): HTMLElement {
            this.style.borderBottomRightRadius = value + "px";
            return this;
        };
        HTMLElement.prototype.borderTopLeftRadius = function (value: number): HTMLElement {
            this.style.borderTopLeftRadius = value + "px";
            return this;
        };
        HTMLElement.prototype.borderTopRightRadius = function (value: number): HTMLElement {
            this.style.borderTopRightRadius = value + "px";
            return this;
        };
    }

    function BorderWidth() {
        HTMLElement.prototype.borderWidthS = function (value: string): HTMLElement {
            this.style.borderWidth = value;
            return this;
        };
        HTMLElement.prototype.borderBottomWidthS = function (value: string): HTMLElement {
            this.style.borderBottomWidth = value;
            return this;
        };
        HTMLElement.prototype.borderRightWidthS = function (value: string): HTMLElement {
            this.style.borderRightWidth = value;
            return this;
        };
        HTMLElement.prototype.borderTopWidthS = function (value: string): HTMLElement {
            this.style.borderTopWidth = value;
            return this;
        };
        HTMLElement.prototype.borderLeftWidthS = function (value: string): HTMLElement {
            this.style.borderLeftWidth = value;
            return this;
        };
        HTMLElement.prototype.borderImageWidthS = function (value: string): HTMLElement {
            this.style.borderImageWidth = value;
            return this;
        };
        //////////////////////////////////////////////////////////////////////////////////
        HTMLElement.prototype.borderWidth = function (value: number): HTMLElement {
            this.style.borderWidth = value + "px";
            return this;
        };
        HTMLElement.prototype.borderBottomWidth = function (value: number): HTMLElement {
            this.style.borderBottomWidth = value + "px";
            return this;
        };
        HTMLElement.prototype.borderRightWidth = function (value: number): HTMLElement {
            this.style.borderRightWidth = value + "px";
            return this;
        };
        HTMLElement.prototype.borderTopWidth = function (value: number): HTMLElement {
            this.style.borderTopWidth = value + "px";
            return this;
        };
        HTMLElement.prototype.borderLeftWidth = function (value: number): HTMLElement {
            this.style.borderLeftWidth = value + "px";
            return this;
        };
        HTMLElement.prototype.borderImageWidth = function (value: number): HTMLElement {
            this.style.borderImageWidth = value + "px";
            return this;
        };
    }

    function BorderColor() {
        HTMLElement.prototype.borderColor = function (value: string): HTMLElement {
            this.style.borderColor = value;
            return this;
        };
        HTMLElement.prototype.borderBottomColor = function (value: string): HTMLElement {
            this.style.borderBottomColor = value;
            return this;
        };
        HTMLElement.prototype.borderLeftColor = function (value: string): HTMLElement {
            this.style.borderLeftColor = value;
            return this;
        };
        HTMLElement.prototype.borderRightColor = function (value: string): HTMLElement {
            this.style.borderRightColor = value;
            return this;
        };
        HTMLElement.prototype.borderTopColor = function (value: string): HTMLElement {
            this.style.borderTopColor = value;
            return this;
        };
    }

    function BorderImage() {
        HTMLElement.prototype.borderImage = function (value: string): HTMLElement {
            this.style.borderImage = value;
            return this;
        };
        HTMLElement.prototype.borderImageOutset = function (value: string): HTMLElement {
            this.style.borderImageOutset = value;
            return this;
        };
        HTMLElement.prototype.borderImageRepeat = function (value: string): HTMLElement {
            this.style.borderImageRepeat = value;
            return this;
        };
        HTMLElement.prototype.borderImageSlice = function (value: string): HTMLElement {
            this.style.borderImageSlice = value;
            return this;
        };
        HTMLElement.prototype.borderImageSource = function (value: string): HTMLElement {
            this.style.borderImageSource = value;
            return this;
        };
    }

    function BorderStyle() {
        HTMLElement.prototype.borderStyle = function (value: string): HTMLElement {
            this.style.borderStyle = value;
            return this;
        };
        HTMLElement.prototype.borderLeftStyle = function (value: string): HTMLElement {
            this.style.borderLeftStyle = value;
            return this;
        };
        HTMLElement.prototype.borderBottomStyle = function (value: string): HTMLElement {
            this.style.borderBottomStyle = value;
            return this;
        };
        HTMLElement.prototype.borderRightStyle = function (value: string): HTMLElement {
            this.style.borderRightStyle = value;
            return this;
        };
        HTMLElement.prototype.borderTopStyle = function (value: string): HTMLElement {
            this.style.borderTopStyle = value;
            return this;
        };
    }

    function More() {
        HTMLElement.prototype.borderCollapse = function (value: string): HTMLElement {
            this.style.borderCollapse = value;
            return this;
        };
        HTMLElement.prototype.borderSpacing = function (value: string): HTMLElement {
            this.style.borderSpacing = value;
            return this;
        };
    }
}