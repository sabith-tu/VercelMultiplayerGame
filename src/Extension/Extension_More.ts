declare global {
    interface HTMLElement {
        backfaceVisibility(value: string): this;

        boxDecorationBreak(value: string): this;

        boxShadowS(value: string): this;

        boxShadow(offsetX: number, offsetY: number, blur: number, color: string): this;

        boxShadowDef(): this;

        noBoxShadow(): this;

        captionSide(value: string): this;

        caretColor(value: string): this;

        clear(value: string): this;

        clip(value: string): this;

        counterIncrement(value: string): this;

        counterReset(value: string): this;

        cursor(value: string): this;

        emptyCells(value: string): this;

        filter(value: string): this;

        cssFloat(value: string): this;

        hangingPunctuation(value: string): this;

        hyphens(value: string): this;

        icon(value: string): this;

        isolation(value: string): this;

        lineHeight(value: string): this;

        listStyle(value: string): this;

        listStyleImage(value: string): this;

        listStylePosition(value: string): this;

        listStyleType(value: string): this;

        navDown(value: string): this;

        navIndex(value: string): this;

        navLeft(value: string): this;

        navRight(value: string): this;

        navUp(value: string): this;

        objectPosition(value: string): this;

        opacity(value: string): this;

        order(value: string): this;

        orphans(value: string): this;

        pageBreakAfter(value: string): this;

        pageBreakBefore(value: string): this;

        pageBreakInside(value: string): this;

        quotes(value: string): this;

        scrollBehavior(value: string): this;

        tableLayout(value: string): this;

        tabSize(value: string): this;

        unicodeBidi(value: string): this;

        userSelect(value: string): this;

        whiteSpace(value: string): this;

        widows(value: string): this;
    }
}


export function Extension_More() {

    HTMLElement.prototype.backfaceVisibility = function (value: string): HTMLElement {
        this.style.backfaceVisibility = value;
        return this;
    };

    HTMLElement.prototype.boxDecorationBreak = function (value: string): HTMLElement {
        this.style.boxDecorationBreak = value;
        return this;
    };

    HTMLElement.prototype.boxShadowS = function (value: string): HTMLElement {
        this.style.boxShadow = value;
        return this;
    };

    HTMLElement.prototype.boxShadow = function (offsetX: number, offsetY: number, blur: number, color: string): HTMLElement {
        this.boxShadowS(`${offsetX}px ${offsetY}px ${blur}px ${color}`);
        return this;
    };

    HTMLElement.prototype.boxShadowDef = function (): HTMLElement {
        this.boxShadow(10, 10, 20, `rgba(0, 0, 0, 0.5)`);
        return this;
    };

    HTMLElement.prototype.noBoxShadow = function (): HTMLElement {
        this.boxShadowS("none");
        return this;
    };

    HTMLElement.prototype.captionSide = function (value: string): HTMLElement {
        this.style.captionSide = value;
        return this;
    };

    HTMLElement.prototype.caretColor = function (value: string): HTMLElement {
        this.style.caretColor = value;
        return this;
    };

    HTMLElement.prototype.clear = function (value: string): HTMLElement {
        this.style.clear = value;
        return this;
    };

    HTMLElement.prototype.clip = function (value: string): HTMLElement {
        this.style.clip = value;
        return this;
    };

    HTMLElement.prototype.counterIncrement = function (value: string): HTMLElement {
        this.style.counterIncrement = value;
        return this;
    };

    HTMLElement.prototype.counterReset = function (value: string): HTMLElement {
        this.style.counterReset = value;
        return this;
    };

    HTMLElement.prototype.cursor = function (value: string): HTMLElement {
        this.style.cursor = value;
        return this;
    };

    HTMLElement.prototype.emptyCells = function (value: string): HTMLElement {
        this.style.emptyCells = value;
        return this;
    };

    HTMLElement.prototype.filter = function (value: string): HTMLElement {
        this.style.filter = value;
        return this;
    };

    HTMLElement.prototype.cssFloat = function (value: string): HTMLElement {
        this.style.cssFloat = value;
        return this;
    };

    // HTMLElement.prototype.hangingPunctuation = function (value: string): HTMLElement {
    //     this.style.hangingPunctuation = value;
    //     return this;
    // };

    HTMLElement.prototype.hyphens = function (value: string): HTMLElement {
        this.style.hyphens = value;
        return this;
    };

    // HTMLElement.prototype.icon = function (value: string): HTMLElement {
    //     this.style.icon = value;
    //     return this;
    // };

    HTMLElement.prototype.isolation = function (value: string): HTMLElement {
        this.style.isolation = value;
        return this;
    };

    HTMLElement.prototype.lineHeight = function (value: string): HTMLElement {
        this.style.lineHeight = value;
        return this;
    };

    HTMLElement.prototype.listStyle = function (value: string): HTMLElement {
        this.style.listStyle = value;
        return this;
    };

    HTMLElement.prototype.listStyleImage = function (value: string): HTMLElement {
        this.style.listStyleImage = value;
        return this;
    };

    HTMLElement.prototype.listStylePosition = function (value: string): HTMLElement {
        this.style.listStylePosition = value;
        return this;
    };

    HTMLElement.prototype.listStyleType = function (value: string): HTMLElement {
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

    HTMLElement.prototype.objectPosition = function (value: string): HTMLElement {
        this.style.objectPosition = value;
        return this;
    };

    HTMLElement.prototype.opacity = function (value: string): HTMLElement {
        this.style.opacity = value;
        return this;
    };

    HTMLElement.prototype.order = function (value: string): HTMLElement {
        this.style.order = value;
        return this;
    };

    HTMLElement.prototype.orphans = function (value: string): HTMLElement {
        this.style.orphans = value;
        return this;
    };

    HTMLElement.prototype.pageBreakAfter = function (value: string): HTMLElement {
        this.style.pageBreakAfter = value;
        return this;
    };

    HTMLElement.prototype.pageBreakBefore = function (value: string): HTMLElement {
        this.style.pageBreakBefore = value;
        return this;
    };

    HTMLElement.prototype.pageBreakInside = function (value: string): HTMLElement {
        this.style.pageBreakInside = value;
        return this;
    };

    HTMLElement.prototype.quotes = function (value: string): HTMLElement {
        this.style.quotes = value;
        return this;
    };

    HTMLElement.prototype.scrollBehavior = function (value: string): HTMLElement {
        this.style.scrollBehavior = value;
        return this;
    };

    HTMLElement.prototype.tableLayout = function (value: string): HTMLElement {
        this.style.tableLayout = value;
        return this;
    };

    HTMLElement.prototype.tabSize = function (value: string): HTMLElement {
        this.style.tabSize = value;
        return this;
    };

    HTMLElement.prototype.unicodeBidi = function (value: string): HTMLElement {
        this.style.unicodeBidi = value;
        return this;
    };

    HTMLElement.prototype.userSelect = function (value: string): HTMLElement {
        this.style.userSelect = value;
        return this;
    };

    HTMLElement.prototype.whiteSpace = function (value: string): HTMLElement {
        this.style.whiteSpace = value;
        return this;
    };

    HTMLElement.prototype.widows = function (value: string): HTMLElement {
        this.style.widows = value;
        return this;
    };
}
