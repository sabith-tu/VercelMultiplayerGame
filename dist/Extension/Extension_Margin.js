export function Extension_Margin() {
    HTMLElement.prototype.noMargin = function () {
        this.style.margin = "0px";
        return this;
    };
    StringBased();
    PixelBased();
    function StringBased() {
        HTMLElement.prototype.marginS = function (value) {
            this.style.margin = value;
            return this;
        };
        HTMLElement.prototype.marginBottomS = function (value) {
            this.style.marginBottom = value;
            return this;
        };
        HTMLElement.prototype.marginLeftS = function (value) {
            this.style.marginLeft = value;
            return this;
        };
        HTMLElement.prototype.marginRightS = function (value) {
            this.style.marginRight = value;
            return this;
        };
        HTMLElement.prototype.marginTopS = function (value) {
            this.style.marginTop = value;
            return this;
        };
        HTMLElement.prototype.marginTopBottomS = function (value) {
            this.marginTopS(value).marginBottomS(value);
            return this;
        };
        HTMLElement.prototype.marginLeftRightS = function (value) {
            this.marginLeftS(value).marginRightS(value);
            return this;
        };
    }
    function PixelBased() {
        HTMLElement.prototype.margin = function (value) {
            this.style.margin = value + "px";
            return this;
        };
        HTMLElement.prototype.marginBottom = function (value) {
            this.style.marginBottom = value + "px";
            return this;
        };
        HTMLElement.prototype.marginLeft = function (value) {
            this.style.marginLeft = value + "px";
            return this;
        };
        HTMLElement.prototype.marginRight = function (value) {
            this.style.marginRight = value + "px";
            return this;
        };
        HTMLElement.prototype.marginTop = function (value) {
            this.style.marginTop = value + "px";
            return this;
        };
        HTMLElement.prototype.marginTopBottom = function (value) {
            this.marginTop(value).marginBottom(value);
            return this;
        };
        HTMLElement.prototype.marginLeftRight = function (value) {
            this.marginLeft(value).marginRight(value);
            return this;
        };
    }
}
