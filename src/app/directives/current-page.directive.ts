import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

/**
 * Adds or removes the aria-current attribute with value "page".
 */
@Directive({
    selector: '[appCurrentPage]'
})
export class CurrentPageDirective implements OnChanges {
    /**
     * Whether the HTML element should be marked as the current page.
     */
    @Input() appCurrentPage = false;

    constructor(
        private elRef: ElementRef
    ) {}

    public ngOnChanges(): void {
        const htmlElement = (this.elRef.nativeElement as HTMLElement);
        if (this.appCurrentPage) {
           htmlElement.setAttribute('aria-current', 'page');
        } else {
            htmlElement.removeAttribute('aria-current');
        }
    }
}
