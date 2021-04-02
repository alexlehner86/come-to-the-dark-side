import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

/**
 * Adds or removes the aria-invalid and aria-describedBy attributes.
 */
@Directive({
    selector: '[appMarkInvalid]'
})
export class MarkInvalidDirective implements OnChanges {
    /**
     * If a string is passed, then the element is marked invalid with aria-invalid and
     * the string used as the id of the element referenced by aria-describedBy.
     */
    @Input() appMarkInvalid = '';

    constructor(
        private elRef: ElementRef
    ) {}

    public ngOnChanges(): void {
        const htmlElement = (this.elRef.nativeElement as HTMLElement);
        if (this.appMarkInvalid) {
           htmlElement.setAttribute('aria-invalid', 'true');
           htmlElement.setAttribute('aria-describedBy', this.appMarkInvalid);
        } else {
            htmlElement.removeAttribute('aria-invalid');
            htmlElement.removeAttribute('aria-describedBy');
        }
    }
}
