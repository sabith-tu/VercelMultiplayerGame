export function Extension_Padding() {
    HTMLElement.prototype.noPadding = function () {
        this.style.padding = "0px";
        return this;
    };
    StringBased();
    PixelBased();
    function StringBased() {
        HTMLElement.prototype.paddingS = function (value) {
            this.style.padding = value;
            return this;
        };
        HTMLElement.prototype.paddingBottomS = function (value) {
            this.style.paddingBottom = value;
            return this;
        };
        HTMLElement.prototype.paddingLeftS = function (value) {
            this.style.paddingLeft = value;
            return this;
        };
        HTMLElement.prototype.paddingRightS = function (value) {
            this.style.paddingRight = value;
            return this;
        };
        HTMLElement.prototype.paddingTopS = function (value) {
            this.style.paddingTop = value;
            return this;
        };
        HTMLElement.prototype.paddingTopBottomS = function (value) {
            this.paddingTopS(value).paddingBottomS(value);
            return this;
        };
        HTMLElement.prototype.paddingLeftRightS = function (value) {
            this.paddingLeftS(value).paddingRightS(value);
            return this;
        };
    }
    function PixelBased() {
        HTMLElement.prototype.padding = function (value) {
            this.style.padding = value + "px";
            return this;
        };
        HTMLElement.prototype.paddingBottom = function (value) {
            this.style.paddingBottom = value + "px";
            return this;
        };
        HTMLElement.prototype.paddingLeft = function (value) {
            this.style.paddingLeft = value + "px";
            return this;
        };
        HTMLElement.prototype.paddingRight = function (value) {
            this.style.paddingRight = value + "px";
            return this;
        };
        HTMLElement.prototype.paddingTop = function (value) {
            this.style.paddingTop = value + "px";
            return this;
        };
        HTMLElement.prototype.paddingTopBottom = function (value) {
            this.paddingTop(value).paddingBottom(value);
            return this;
        };
        HTMLElement.prototype.paddingLeftRight = function (value) {
            this.paddingLeft(value).paddingRight(value);
            return this;
        };
    }
}
