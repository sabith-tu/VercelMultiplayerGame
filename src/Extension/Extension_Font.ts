declare global {
    interface HTMLElement {
        text(value: string): this;

        outline(value: string): this;

        outlineColor(value: string): this;

        outlineOffset(value: string): this;

        outlineStyle(value: string): this;

        outlineWidth(value: string): this;

        overflow(value: string): this;

        overflowX(value: string): this;

        overflowY(value: string): this;

        wordBreak(value: string): this;

        wordSpacing(value: string): this;

        wordWrap(value: string): this;

        textAlign(value: string): this;

        textAlignLast(value: string): this;

        textDecoration(value: string): this;

        textDecorationColor(value: string): this;

        textDecorationLine(value: string): this;

        textDecorationStyle(value: string): this;

        textIndent(value: string): this;

        textJustify(value: string): this;

        textOverflow(value: string): this;

        textShadow(value: string): this;

        textTransform(value: string): this;

        font(value: string): this;

        fontFamily(value: string): this;

        fontSize(value: string): this;

        fontStyle(value: string): this;

        fontVariant(value: string): this;

        fontWeight(value: string): this;

        fontSizeAdjust(value: string): this;

        fontStretch(value: string): this;

        letterSpacing(value: string): this;
    }
}

export function Extension_Font() {
    HTMLElement.prototype.text = function (value: string): HTMLElement {
        this.innerText = value;
        return this;
    };
    HTMLElement.prototype.outline = function (value: string): HTMLElement {
        this.style.outline = value;
        return this;
    };

    HTMLElement.prototype.outlineColor = function (value: string): HTMLElement {
        this.style.outlineColor = value;
        return this;
    };

    HTMLElement.prototype.outlineOffset = function (value: string): HTMLElement {
        this.style.outlineOffset = value;
        return this;
    };

    HTMLElement.prototype.outlineStyle = function (value: string): HTMLElement {
        this.style.outlineStyle = value;
        return this;
    };

    HTMLElement.prototype.outlineWidth = function (value: string): HTMLElement {
        this.style.outlineWidth = value;
        return this;
    };

    HTMLElement.prototype.overflow = function (value: string): HTMLElement {
        this.style.overflow = value;
        return this;
    };

    HTMLElement.prototype.overflowX = function (value: string): HTMLElement {
        this.style.overflowX = value;
        return this;
    };

    HTMLElement.prototype.overflowY = function (value: string): HTMLElement {
        this.style.overflowY = value;
        return this;
    };

    HTMLElement.prototype.wordBreak = function (value: string): HTMLElement {
        this.style.wordBreak = value;
        return this;
    };

    HTMLElement.prototype.wordSpacing = function (value: string): HTMLElement {
        this.style.wordSpacing = value;
        return this;
    };

    HTMLElement.prototype.wordWrap = function (value: string): HTMLElement {
        this.style.wordWrap = value;
        return this;
    };

    HTMLElement.prototype.textAlign = function (value: string): HTMLElement {
        this.style.textAlign = value;
        return this;
    };

    HTMLElement.prototype.textAlignLast = function (value: string): HTMLElement {
        this.style.textAlignLast = value;
        return this;
    };

    HTMLElement.prototype.textDecoration = function (value: string): HTMLElement {
        this.style.textDecoration = value;
        return this;
    };

    HTMLElement.prototype.textDecorationColor = function (value: string): HTMLElement {
        this.style.textDecorationColor = value;
        return this;
    };

    HTMLElement.prototype.textDecorationLine = function (value: string): HTMLElement {
        this.style.textDecorationLine = value;
        return this;
    };

    HTMLElement.prototype.textDecorationStyle = function (value: string): HTMLElement {
        this.style.textDecorationStyle = value;
        return this;
    };

    HTMLElement.prototype.textIndent = function (value: string): HTMLElement {
        this.style.textIndent = value;
        return this;
    };

    // HTMLElement.prototype.textJustify = function (value: string): HTMLElement {
    //     this.style.textJustify = value;
    //     return this;
    // };

    HTMLElement.prototype.textOverflow = function (value: string): HTMLElement {
        this.style.textOverflow = value;
        return this;
    };

    HTMLElement.prototype.textShadow = function (value: string): HTMLElement {
        this.style.textShadow = value;
        return this;
    };

    HTMLElement.prototype.textTransform = function (value: string): HTMLElement {
        this.style.textTransform = value;
        return this;
    };

    HTMLElement.prototype.font = function (value: string): HTMLElement {
        this.style.font = value;
        return this;
    };

    HTMLElement.prototype.fontFamily = function (value: string): HTMLElement {
        this.style.fontFamily = value;
        return this;
    };

    HTMLElement.prototype.fontSize = function (value: string): HTMLElement {
        this.style.fontSize = value;
        return this;
    };

    HTMLElement.prototype.fontStyle = function (value: string): HTMLElement {
        this.style.fontStyle = value;
        return this;
    };

    HTMLElement.prototype.fontVariant = function (value: string): HTMLElement {
        this.style.fontVariant = value;
        return this;
    };

    HTMLElement.prototype.fontWeight = function (value: string): HTMLElement {
        this.style.fontWeight = value;
        return this;
    };

    HTMLElement.prototype.fontSizeAdjust = function (value: string): HTMLElement {
        this.style.fontSizeAdjust = value;
        return this;
    };

    HTMLElement.prototype.fontStretch = function (value: string): HTMLElement {
        this.style.fontStretch = value;
        return this;
    };

    HTMLElement.prototype.letterSpacing = function (value: string): HTMLElement {
        this.style.letterSpacing = value;
        return this;
    };
}