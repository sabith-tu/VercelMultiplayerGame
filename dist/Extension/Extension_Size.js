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
        HTMLElement.prototype.widthS = function (value) {
            this.style.width = value;
            return this;
        };
        HTMLElement.prototype.heightS = function (value) {
            this.style.height = value;
            return this;
        };
        HTMLElement.prototype.sizeS = function (width, height) {
            this.style.width = width;
            this.style.height = height;
            return this;
        };
    }
    function MinSize() {
        HTMLElement.prototype.minWidthS = function (value) {
            this.style.minWidth = value;
            return this;
        };
        HTMLElement.prototype.minHeightS = function (value) {
            this.style.minHeight = value;
            return this;
        };
        HTMLElement.prototype.minSizeS = function (width, height) {
            this.style.minWidth = width;
            this.style.minHeight = height;
            return this;
        };
        HTMLElement.prototype.maxSizeS = function (width, height) {
            this.style.maxWidth = width;
            this.style.maxHeight = height;
            return this;
        };
    }
    function MaxSize() {
        HTMLElement.prototype.maxWidthS = function (value) {
            this.style.maxWidth = value;
            return this;
        };
        HTMLElement.prototype.maxHeightS = function (value) {
            this.style.maxHeight = value;
            return this;
        };
    }
    function FixedSize() {
        HTMLElement.prototype.fixedWidthS = function (width) {
            this.style.minWidth = width;
            this.style.maxWidth = width;
            return this;
        };
        HTMLElement.prototype.fixedHeightS = function (height) {
            this.style.minHeight = height;
            this.style.maxHeight = height;
            return this;
        };
        HTMLElement.prototype.fixedSizeS = function (width, height) {
            this.style.minWidth = width;
            this.style.minHeight = height;
            this.style.maxWidth = width;
            this.style.maxHeight = height;
            return this;
        };
    }
    function SizePx() {
        HTMLElement.prototype.width = function (value) {
            this.style.width = value + "px";
            return this;
        };
        HTMLElement.prototype.height = function (value) {
            this.style.height = value + "px";
            return this;
        };
        HTMLElement.prototype.size = function (width, height) {
            this.style.width = width + "px";
            this.style.height = height + "px";
            return this;
        };
    }
    function MinSizePx() {
        HTMLElement.prototype.minWidth = function (value) {
            this.style.minWidth = value + "px";
            return this;
        };
        HTMLElement.prototype.minHeight = function (value) {
            this.style.minHeight = value + "px";
            return this;
        };
        HTMLElement.prototype.minSize = function (width, height) {
            this.style.minWidth = width + "px";
            this.style.minHeight = height + "px";
            return this;
        };
        HTMLElement.prototype.maxSize = function (width, height) {
            this.style.maxWidth = width + "px";
            this.style.maxHeight = height + "px";
            return this;
        };
    }
    function MaxSizePx() {
        HTMLElement.prototype.maxWidth = function (value) {
            this.style.maxWidth = value + "px";
            return this;
        };
        HTMLElement.prototype.maxHeight = function (value) {
            this.style.maxHeight = value + "px";
            return this;
        };
    }
    function FixedSizePx() {
        HTMLElement.prototype.fixedWidth = function (width) {
            this.style.minWidth = width + "px";
            this.style.maxWidth = width + "px";
            return this;
        };
        HTMLElement.prototype.fixedHeight = function (height) {
            this.style.minHeight = height + "px";
            this.style.maxHeight = height + "px";
            return this;
        };
        HTMLElement.prototype.fixedSize = function (width, height) {
            this.style.minWidth = width + "px";
            this.style.minHeight = height + "px";
            this.style.maxWidth = width + "px";
            this.style.maxHeight = height + "px";
            return this;
        };
    }
    function SizeVh() {
        HTMLElement.prototype.widthV = function (value) {
            this.style.width = value + "vw";
            return this;
        };
        HTMLElement.prototype.heightV = function (value) {
            this.style.height = value + "vh";
            return this;
        };
        HTMLElement.prototype.sizeV = function (width, height) {
            this.style.width = width + "vw";
            this.style.height = height + "vh";
            return this;
        };
    }
    function MinSizeVh() {
        HTMLElement.prototype.minWidthV = function (value) {
            this.style.minWidth = value + "vw";
            return this;
        };
        HTMLElement.prototype.minHeightV = function (value) {
            this.style.minHeight = value + "vh";
            return this;
        };
        HTMLElement.prototype.minSizeV = function (width, height) {
            this.style.minWidth = width + "vw";
            this.style.minHeight = height + "vh";
            return this;
        };
        HTMLElement.prototype.maxSizeV = function (width, height) {
            this.style.maxWidth = width + "vw";
            this.style.maxHeight = height + "vh";
            return this;
        };
    }
    function MaxSizeVh() {
        HTMLElement.prototype.maxWidthV = function (value) {
            this.style.maxWidth = value + "vw";
            return this;
        };
        HTMLElement.prototype.maxHeightV = function (value) {
            this.style.maxHeight = value + "vh";
            return this;
        };
    }
    function FixedSizeVh() {
        HTMLElement.prototype.fixedWidthV = function (width) {
            this.style.minWidth = width + "vw";
            this.style.maxWidth = width + "vw";
            return this;
        };
        HTMLElement.prototype.fixedHeightV = function (height) {
            this.style.minHeight = height + "vh";
            this.style.maxHeight = height + "vh";
            return this;
        };
        HTMLElement.prototype.fixedSizeV = function (width, height) {
            this.style.minWidth = width + "vw";
            this.style.minHeight = height + "vh";
            this.style.maxWidth = width + "vw";
            this.style.maxHeight = height + "vh";
            return this;
        };
    }
    // Composition -------------------------------------------------------------------------
}
