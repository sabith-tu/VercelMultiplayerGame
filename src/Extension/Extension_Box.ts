declare global {
    interface HTMLElement {
        visibility(value: string): this;

        boxSizing(value: string): this;

        content(value: string): this;

        display(value: string): this;

        displayFlex(): this;

        main(): this;
    }
}

export function Extension_Box() {
    HTMLElement.prototype.visibility = function (value: string): HTMLElement {
        this.style.visibility = value;
        return this;
    };

    HTMLElement.prototype.boxSizing = function (value: string): HTMLElement {
        this.style.boxSizing = value;
        return this;
    };

    HTMLElement.prototype.content = function (value: string): HTMLElement {
        this.style.content = value;
        return this;
    };

    HTMLElement.prototype.display = function (value: string): HTMLElement {
        this.style.display = value;
        return this;
    };

    HTMLElement.prototype.displayFlex = function (): HTMLElement {
        this.style.display = "flex";
        return this;
    };

    HTMLElement.prototype.main = function main(): HTMLElement {
        this.margin(0).padding(0).boxSizing("border-box").displayFlex()
            .fontFamily("Arial, sans-serif").lineHeight("1.6px").overflowX("hidden")
            .scrollBehavior("smooth").backgroundColor("#f4f4f4").color("#333").fixedSizeV(100, 100)
        this.style.boxSizing = "border-box";
        return this;
    }
}