export function Extension_Border() {
    Border();
    BorderRadius();
    BorderWidth();
    BorderColor();
    BorderImage();
    BorderStyle();
    More();
    function Border() {
        HTMLElement.prototype.border = function (value) {
            this.style.border = value;
            return this;
        };
        HTMLElement.prototype.borderBottom = function (value) {
            this.style.borderBottom = value;
            return this;
        };
        HTMLElement.prototype.borderRight = function (value) {
            this.style.borderRight = value;
            return this;
        };
        HTMLElement.prototype.borderTop = function (value) {
            this.style.borderTop = value;
            return this;
        };
        HTMLElement.prototype.borderLeft = function (value) {
            this.style.borderLeft = value;
            return this;
        };
    }
    function BorderRadius() {
        HTMLElement.prototype.borderRadiusS = function (value) {
            this.style.borderRadius = value;
            return this;
        };
        HTMLElement.prototype.borderBottomLeftRadiusS = function (value) {
            this.style.borderBottomLeftRadius = value;
            return this;
        };
        HTMLElement.prototype.borderBottomRightRadiusS = function (value) {
            this.style.borderBottomRightRadius = value;
            return this;
        };
        HTMLElement.prototype.borderTopLeftRadiusS = function (value) {
            this.style.borderTopLeftRadius = value;
            return this;
        };
        HTMLElement.prototype.borderTopRightRadiusS = function (value) {
            this.style.borderTopRightRadius = value;
            return this;
        };
        //////////////////////////////////////////////////////////////////////////////////
        HTMLElement.prototype.borderRadius = function (value) {
            this.style.borderRadius = value + "px";
            return this;
        };
        HTMLElement.prototype.borderBottomLeftRadius = function (value) {
            this.style.borderBottomLeftRadius = value + "px";
            return this;
        };
        HTMLElement.prototype.borderBottomRightRadius = function (value) {
            this.style.borderBottomRightRadius = value + "px";
            return this;
        };
        HTMLElement.prototype.borderTopLeftRadius = function (value) {
            this.style.borderTopLeftRadius = value + "px";
            return this;
        };
        HTMLElement.prototype.borderTopRightRadius = function (value) {
            this.style.borderTopRightRadius = value + "px";
            return this;
        };
    }
    function BorderWidth() {
        HTMLElement.prototype.borderWidthS = function (value) {
            this.style.borderWidth = value;
            return this;
        };
        HTMLElement.prototype.borderBottomWidthS = function (value) {
            this.style.borderBottomWidth = value;
            return this;
        };
        HTMLElement.prototype.borderRightWidthS = function (value) {
            this.style.borderRightWidth = value;
            return this;
        };
        HTMLElement.prototype.borderTopWidthS = function (value) {
            this.style.borderTopWidth = value;
            return this;
        };
        HTMLElement.prototype.borderLeftWidthS = function (value) {
            this.style.borderLeftWidth = value;
            return this;
        };
        HTMLElement.prototype.borderImageWidthS = function (value) {
            this.style.borderImageWidth = value;
            return this;
        };
        //////////////////////////////////////////////////////////////////////////////////
        HTMLElement.prototype.borderWidth = function (value) {
            this.style.borderWidth = value + "px";
            return this;
        };
        HTMLElement.prototype.borderBottomWidth = function (value) {
            this.style.borderBottomWidth = value + "px";
            return this;
        };
        HTMLElement.prototype.borderRightWidth = function (value) {
            this.style.borderRightWidth = value + "px";
            return this;
        };
        HTMLElement.prototype.borderTopWidth = function (value) {
            this.style.borderTopWidth = value + "px";
            return this;
        };
        HTMLElement.prototype.borderLeftWidth = function (value) {
            this.style.borderLeftWidth = value + "px";
            return this;
        };
        HTMLElement.prototype.borderImageWidth = function (value) {
            this.style.borderImageWidth = value + "px";
            return this;
        };
    }
    function BorderColor() {
        HTMLElement.prototype.borderColor = function (value) {
            this.style.borderColor = value;
            return this;
        };
        HTMLElement.prototype.borderBottomColor = function (value) {
            this.style.borderBottomColor = value;
            return this;
        };
        HTMLElement.prototype.borderLeftColor = function (value) {
            this.style.borderLeftColor = value;
            return this;
        };
        HTMLElement.prototype.borderRightColor = function (value) {
            this.style.borderRightColor = value;
            return this;
        };
        HTMLElement.prototype.borderTopColor = function (value) {
            this.style.borderTopColor = value;
            return this;
        };
    }
    function BorderImage() {
        HTMLElement.prototype.borderImage = function (value) {
            this.style.borderImage = value;
            return this;
        };
        HTMLElement.prototype.borderImageOutset = function (value) {
            this.style.borderImageOutset = value;
            return this;
        };
        HTMLElement.prototype.borderImageRepeat = function (value) {
            this.style.borderImageRepeat = value;
            return this;
        };
        HTMLElement.prototype.borderImageSlice = function (value) {
            this.style.borderImageSlice = value;
            return this;
        };
        HTMLElement.prototype.borderImageSource = function (value) {
            this.style.borderImageSource = value;
            return this;
        };
    }
    function BorderStyle() {
        HTMLElement.prototype.borderStyle = function (value) {
            this.style.borderStyle = value;
            return this;
        };
        HTMLElement.prototype.borderLeftStyle = function (value) {
            this.style.borderLeftStyle = value;
            return this;
        };
        HTMLElement.prototype.borderBottomStyle = function (value) {
            this.style.borderBottomStyle = value;
            return this;
        };
        HTMLElement.prototype.borderRightStyle = function (value) {
            this.style.borderRightStyle = value;
            return this;
        };
        HTMLElement.prototype.borderTopStyle = function (value) {
            this.style.borderTopStyle = value;
            return this;
        };
    }
    function More() {
        HTMLElement.prototype.borderCollapse = function (value) {
            this.style.borderCollapse = value;
            return this;
        };
        HTMLElement.prototype.borderSpacing = function (value) {
            this.style.borderSpacing = value;
            return this;
        };
    }
}
