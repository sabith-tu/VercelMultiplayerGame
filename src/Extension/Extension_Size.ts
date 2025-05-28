declare global {
    interface HTMLElement {
        widthS(value: string): this;

        heightS(value: string): this;

        sizeS(width: string, height: string): this;

        minWidthS(value: string): this;

        minHeightS(value: string): this;

        minSizeS(width: string, height: string): this;

        maxSizeS(width: string, height: string): this;

        maxWidthS(value: string): this;

        maxHeightS(value: string): this;

        fixedWidthS(width: string): this;

        fixedHeightS(height: string): this;

        fixedSizeS(width: string, height: string): this;

        width(value: number): this;

        height(value: number): this;

        size(width: number, height: number): this;

        minWidth(value: number): this;

        minHeight(value: number): this;

        minSize(width: number, height: number): this;

        maxSize(width: number, height: number): this;

        maxWidth(value: number): this;

        maxHeight(value: number): this;

        fixedWidth(width: number): this;

        fixedHeight(height: number): this;

        fixedSize(width: number, height: number): this;

        widthV(value: number): this;

        heightV(value: number): this;

        sizeV(width: number, height: number): this;

        minWidthV(value: number): this;

        minHeightV(value: number): this;

        minSizeV(width: number, height: number): this;

        maxSizeV(width: number, height: number): this;

        maxWidthV(value: number): this;

        maxHeightV(value: number): this;

        fixedWidthV(width: number): this;

        fixedHeightV(height: number): this;

        fixedSizeV(width: number, height: number): this;
    }

}

export function Extension_Size() {

    StringBased();
    PixelBased();
    ViewPortBased();

    function StringBased() {
        Size();
        MinSize();
        MaxSize();
        FixedSize();
    }

    function PixelBased() {
        SizePx();
        MinSizePx();
        MaxSizePx();
        FixedSizePx();
    }

    function ViewPortBased() {
        SizeVh();
        MinSizeVh();
        MaxSizeVh();
        FixedSizeVh();
    }


    function Size() {
        HTMLElement.prototype.widthS = function (value: string): HTMLElement {
            this.style.width = value;
            return this;
        };

        HTMLElement.prototype.heightS = function (value: string): HTMLElement {
            this.style.height = value;
            return this;
        };
        HTMLElement.prototype.sizeS = function (width: string, height: string): HTMLElement {
            this.style.width = width;
            this.style.height = height;
            return this;
        };
    }

    function MinSize() {
        HTMLElement.prototype.minWidthS = function (value: string): HTMLElement {
            this.style.minWidth = value;
            return this;
        };

        HTMLElement.prototype.minHeightS = function (value: string): HTMLElement {
            this.style.minHeight = value;
            return this;
        };

        HTMLElement.prototype.minSizeS = function (width: string, height: string): HTMLElement {
            this.style.minWidth = width;
            this.style.minHeight = height;
            return this;
        };

        HTMLElement.prototype.maxSizeS = function (width: string, height: string): HTMLElement {
            this.style.maxWidth = width;
            this.style.maxHeight = height;
            return this;
        };
    }

    function MaxSize() {
        HTMLElement.prototype.maxWidthS = function (value: string): HTMLElement {
            this.style.maxWidth = value;
            return this;
        };

        HTMLElement.prototype.maxHeightS = function (value: string): HTMLElement {
            this.style.maxHeight = value;
            return this;
        };
    }

    function FixedSize() {
        HTMLElement.prototype.fixedWidthS = function (width: string): HTMLElement {
            this.style.minWidth = width;
            this.style.maxWidth = width;
            return this;
        };

        HTMLElement.prototype.fixedHeightS = function (height: string): HTMLElement {
            this.style.minHeight = height;
            this.style.maxHeight = height;
            return this;
        };

        HTMLElement.prototype.fixedSizeS = function (width: string, height: string): HTMLElement {
            this.style.minWidth = width;
            this.style.minHeight = height;
            this.style.maxWidth = width;
            this.style.maxHeight = height;
            return this;
        };
    }


    function SizePx() {
        HTMLElement.prototype.width = function (value: number): HTMLElement {
            this.style.width = value + "px";
            return this;
        };

        HTMLElement.prototype.height = function (value: number): HTMLElement {
            this.style.height = value + "px";
            return this;
        };
        HTMLElement.prototype.size = function (width: number, height: number): HTMLElement {
            this.style.width = width + "px";
            this.style.height = height + "px";
            return this;
        };
    }

    function MinSizePx() {
        HTMLElement.prototype.minWidth = function (value: number): HTMLElement {
            this.style.minWidth = value + "px";
            return this;
        };

        HTMLElement.prototype.minHeight = function (value: number): HTMLElement {
            this.style.minHeight = value + "px";
            return this;
        };

        HTMLElement.prototype.minSize = function (width: number, height: number): HTMLElement {
            this.style.minWidth = width + "px";
            this.style.minHeight = height + "px";
            return this;
        };

        HTMLElement.prototype.maxSize = function (width: number, height: number): HTMLElement {
            this.style.maxWidth = width + "px";
            this.style.maxHeight = height + "px";
            return this;
        };
    }

    function MaxSizePx() {
        HTMLElement.prototype.maxWidth = function (value: number): HTMLElement {
            this.style.maxWidth = value + "px";
            return this;
        };

        HTMLElement.prototype.maxHeight = function (value: number): HTMLElement {
            this.style.maxHeight = value + "px";
            return this;
        };
    }

    function FixedSizePx() {
        HTMLElement.prototype.fixedWidth = function (width: number): HTMLElement {
            this.style.minWidth = width + "px";
            this.style.maxWidth = width + "px";
            return this;
        };

        HTMLElement.prototype.fixedHeight = function (height: number): HTMLElement {
            this.style.minHeight = height + "px";
            this.style.maxHeight = height + "px";
            return this;
        };

        HTMLElement.prototype.fixedSize = function (width: number, height: number): HTMLElement {
            this.style.minWidth = width + "px";
            this.style.minHeight = height + "px";
            this.style.maxWidth = width + "px";
            this.style.maxHeight = height + "px";
            return this;
        };
    }


    function SizeVh() {
        HTMLElement.prototype.widthV = function (value: number): HTMLElement {
            this.style.width = value + "vw";
            return this;
        };

        HTMLElement.prototype.heightV = function (value: number): HTMLElement {
            this.style.height = value + "vh";
            return this;
        };
        HTMLElement.prototype.sizeV = function (width: number, height: number): HTMLElement {
            this.style.width = width + "vw";
            this.style.height = height + "vh";
            return this;
        };
    }

    function MinSizeVh() {
        HTMLElement.prototype.minWidthV = function (value: number): HTMLElement {
            this.style.minWidth = value + "vw";
            return this;
        };

        HTMLElement.prototype.minHeightV = function (value: number): HTMLElement {
            this.style.minHeight = value + "vh";
            return this;
        };

        HTMLElement.prototype.minSizeV = function (width: number, height: number): HTMLElement {
            this.style.minWidth = width + "vw";
            this.style.minHeight = height + "vh";
            return this;
        };

        HTMLElement.prototype.maxSizeV = function (width: number, height: number): HTMLElement {
            this.style.maxWidth = width + "vw";
            this.style.maxHeight = height + "vh";
            return this;
        };
    }

    function MaxSizeVh() {
        HTMLElement.prototype.maxWidthV = function (value: number): HTMLElement {
            this.style.maxWidth = value + "vw";
            return this;
        };

        HTMLElement.prototype.maxHeightV = function (value: number): HTMLElement {
            this.style.maxHeight = value + "vh";
            return this;
        };
    }

    function FixedSizeVh() {
        HTMLElement.prototype.fixedWidthV = function (width: number): HTMLElement {
            this.style.minWidth = width + "vw";
            this.style.maxWidth = width + "vw";
            return this;
        };

        HTMLElement.prototype.fixedHeightV = function (height: number): HTMLElement {
            this.style.minHeight = height + "vh";
            this.style.maxHeight = height + "vh";
            return this;
        };

        HTMLElement.prototype.fixedSizeV = function (width: number, height: number): HTMLElement {
            this.style.minWidth = width + "vw";
            this.style.minHeight = height + "vh";
            this.style.maxWidth = width + "vw";
            this.style.maxHeight = height + "vh";
            return this;
        };
    }


// Composition -------------------------------------------------------------------------


}