export function Extension_Box() {
    HTMLElement.prototype.visibility = function (value) {
        this.style.visibility = value;
        return this;
    };
    HTMLElement.prototype.boxSizing = function (value) {
        this.style.boxSizing = value;
        return this;
    };
    HTMLElement.prototype.content = function (value) {
        this.style.content = value;
        return this;
    };
    HTMLElement.prototype.display = function (value) {
        this.style.display = value;
        return this;
    };
    HTMLElement.prototype.displayFlex = function () {
        this.style.display = "flex";
        return this;
    };
    HTMLElement.prototype.main = function main() {
        this.margin(0).padding(0).boxSizing("border-box").displayFlex()
            .fontFamily("Arial, sans-serif").lineHeight("1.6px").overflowX("hidden")
            .scrollBehavior("smooth").backgroundColor("#f4f4f4").color("#333").fixedSizeV(100, 100);
        this.style.boxSizing = "border-box";
        return this;
    };
}
