export function Extension_More() {
    HTMLElement.prototype.backfaceVisibility = function (value) {
        this.style.backfaceVisibility = value;
        return this;
    };
    HTMLElement.prototype.boxDecorationBreak = function (value) {
        this.style.boxDecorationBreak = value;
        return this;
    };
    HTMLElement.prototype.boxShadowS = function (value) {
        this.style.boxShadow = value;
        return this;
    };
    HTMLElement.prototype.boxShadow = function (offsetX, offsetY, blur, color) {
        this.boxShadowS(`${offsetX}px ${offsetY}px ${blur}px ${color}`);
        return this;
    };
    HTMLElement.prototype.boxShadowDef = function () {
        this.boxShadow(10, 10, 20, `rgba(0, 0, 0, 0.5)`);
        return this;
    };
    HTMLElement.prototype.noBoxShadow = function () {
        this.boxShadowS("none");
        return this;
    };
    HTMLElement.prototype.captionSide = function (value) {
        this.style.captionSide = value;
        return this;
    };
    HTMLElement.prototype.caretColor = function (value) {
        this.style.caretColor = value;
        return this;
    };
    HTMLElement.prototype.clear = function (value) {
        this.style.clear = value;
        return this;
    };
    HTMLElement.prototype.clip = function (value) {
        this.style.clip = value;
        return this;
    };
    HTMLElement.prototype.counterIncrement = function (value) {
        this.style.counterIncrement = value;
        return this;
    };
    HTMLElement.prototype.counterReset = function (value) {
        this.style.counterReset = value;
        return this;
    };
    HTMLElement.prototype.cursor = function (value) {
        this.style.cursor = value;
        return this;
    };
    HTMLElement.prototype.emptyCells = function (value) {
        this.style.emptyCells = value;
        return this;
    };
    HTMLElement.prototype.filter = function (value) {
        this.style.filter = value;
        return this;
    };
    HTMLElement.prototype.cssFloat = function (value) {
        this.style.cssFloat = value;
        return this;
    };
    // HTMLElement.prototype.hangingPunctuation = function (value: string): HTMLElement {
    //     this.style.hangingPunctuation = value;
    //     return this;
    // };
    HTMLElement.prototype.hyphens = function (value) {
        this.style.hyphens = value;
        return this;
    };
    // HTMLElement.prototype.icon = function (value: string): HTMLElement {
    //     this.style.icon = value;
    //     return this;
    // };
    HTMLElement.prototype.isolation = function (value) {
        this.style.isolation = value;
        return this;
    };
    HTMLElement.prototype.lineHeight = function (value) {
        this.style.lineHeight = value;
        return this;
    };
    HTMLElement.prototype.listStyle = function (value) {
        this.style.listStyle = value;
        return this;
    };
    HTMLElement.prototype.listStyleImage = function (value) {
        this.style.listStyleImage = value;
        return this;
    };
    HTMLElement.prototype.listStylePosition = function (value) {
        this.style.listStylePosition = value;
        return this;
    };
    HTMLElement.prototype.listStyleType = function (value) {
        this.style.listStyleType = value;
        return this;
    };
    // HTMLElement.prototype.navDown = function (value: string): HTMLElement {
    //     this.style.navDown = value;
    //     return this;
    // };
    // HTMLElement.prototype.navIndex = function (value: string): HTMLElement {
    //     this.style.navIndex = value;
    //     return this;
    // };
    // HTMLElement.prototype.navLeft = function (value: string): HTMLElement {
    //     this.style.navLeft = value;
    //     return this;
    // };
    // HTMLElement.prototype.navRight = function (value: string): HTMLElement {
    //     this.style.navRight = value;
    //     return this;
    // };
    // HTMLElement.prototype.navUp = function (value: string): HTMLElement {
    //     this.style.navUp = value;
    //     return this;
    // };
    HTMLElement.prototype.objectPosition = function (value) {
        this.style.objectPosition = value;
        return this;
    };
    HTMLElement.prototype.opacity = function (value) {
        this.style.opacity = value;
        return this;
    };
    HTMLElement.prototype.order = function (value) {
        this.style.order = value;
        return this;
    };
    HTMLElement.prototype.orphans = function (value) {
        this.style.orphans = value;
        return this;
    };
    HTMLElement.prototype.pageBreakAfter = function (value) {
        this.style.pageBreakAfter = value;
        return this;
    };
    HTMLElement.prototype.pageBreakBefore = function (value) {
        this.style.pageBreakBefore = value;
        return this;
    };
    HTMLElement.prototype.pageBreakInside = function (value) {
        this.style.pageBreakInside = value;
        return this;
    };
    HTMLElement.prototype.quotes = function (value) {
        this.style.quotes = value;
        return this;
    };
    HTMLElement.prototype.scrollBehavior = function (value) {
        this.style.scrollBehavior = value;
        return this;
    };
    HTMLElement.prototype.tableLayout = function (value) {
        this.style.tableLayout = value;
        return this;
    };
    HTMLElement.prototype.tabSize = function (value) {
        this.style.tabSize = value;
        return this;
    };
    HTMLElement.prototype.unicodeBidi = function (value) {
        this.style.unicodeBidi = value;
        return this;
    };
    HTMLElement.prototype.userSelect = function (value) {
        this.style.userSelect = value;
        return this;
    };
    HTMLElement.prototype.whiteSpace = function (value) {
        this.style.whiteSpace = value;
        return this;
    };
    HTMLElement.prototype.widows = function (value) {
        this.style.widows = value;
        return this;
    };
}
