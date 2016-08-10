import { autoinject } from 'aurelia-framework';

@autoinject()
export class InfiniteScrollCustomAttribute {
    private callback: Function;
    private isTicking: boolean = false;

    public static ScrollEventName: string = 'scroll';
    public static MinimumScrollBuffer: number = 50;

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

    valueChanged(newCallback: Function) {
        this.callback = newCallback;
    }

    private onScrollChange = () => {
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
        const isPageScrolledToElementBottom = (windowScrollPosition + InfiniteScrollCustomAttribute.MinimumScrollBuffer) >= 
            (elementHeight + elementOffsetTop);

        if (this.callback && isPageScrolledToElementBottom) {
            this.callback();
        }
    }
}