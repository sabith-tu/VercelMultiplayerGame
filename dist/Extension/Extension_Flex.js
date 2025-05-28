export function Extension_Flex() {
    HTMLElement.prototype.flex = function (value) {
        this.style.flex = value;
        return this;
    };
    HTMLElement.prototype.flexBasis = function (value) {
        this.style.flexBasis = value;
        return this;
    };
    HTMLElement.prototype.flexDirection = function (value) {
        this.style.flexDirection = value;
        return this;
    };
    HTMLElement.prototype.flexFlow = function (value) {
        this.style.flexFlow = value;
        return this;
    };
    HTMLElement.prototype.flexGrow = function (value) {
        this.style.flexGrow = value;
        return this;
    };
    HTMLElement.prototype.flexShrink = function (value) {
        this.style.flexShrink = value;
        return this;
    };
    HTMLElement.prototype.flexWrap = function (value) {
        this.style.flexWrap = value;
        return this;
    };
    HTMLElement.prototype.flexColumn = function () {
        this.style.flexDirection = "column";
        return this;
    };
    HTMLElement.prototype.flexRow = function () {
        this.style.flexDirection = "row";
        return this;
    };
    HTMLElement.prototype.flexExpand = function () {
        this.style.flexGrow = "1";
        return this;
    };
}
