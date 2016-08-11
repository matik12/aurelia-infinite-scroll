import { autoinject, bindable } from 'aurelia-framework';

@autoinject()
export class InfiniteScrollCustomAttribute {
    private isTicking: boolean = false;

    @bindable callback: Function;
    @bindable scrollBuffer: number = 50;
    @bindable isActive: boolean = true;

    public static ScrollEventName: string = 'scroll';

    constructor(private element: Element) {
        this.element = element;
    }

    attached() {
        window.addEventListener(InfiniteScrollCustomAttribute.ScrollEventName, this.onScrollChange);
        this.onScrollChange();
    }

    detached() {
        window.removeEventListener(InfiniteScrollCustomAttribute.ScrollEventName, this.onScrollChange);
    }

    callbackChanged(newCallback: Function) {
        this.callback = newCallback;
    }

    scrollBufferChanged(buffer: number) {
        this.scrollBuffer = buffer;
    }

    isActiveChanged(isActive: boolean) {
        this.isActive = isActive;
    }

    private onScrollChange = () => {
        if (!this.isActive) {
            return false;
        }

        if (!this.isTicking) {
            window.requestAnimationFrame(() => {
                this.checkScrollPosition();
                this.isTicking = false;
            });
        }

        this.isTicking = true;
    }

    private checkScrollPosition() {        
        const elementHeight = this.element.scrollHeight;
        const elementOffsetTop = (<any>this.element).offsetTop;
        const windowScrollPosition = window.innerHeight + window.pageYOffset;
        const isPageScrolledToElementBottom = (windowScrollPosition + this.scrollBuffer) >= (elementHeight + elementOffsetTop);

        if (this.callback && isPageScrolledToElementBottom) {
            this.callback();
        }
    }
}