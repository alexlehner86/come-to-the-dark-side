import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkInvalidDirective } from './mark-invalid.directive';

@Component({
    template: '<input type="text" name="email" [appMarkInvalid]="errorTextId">'
})
class TestComponent {
    public errorTextId = '';
}

describe('MarkInvalidDirective', () => {
    let fixture: ComponentFixture<TestComponent>;
    const ariaDescribedBy = 'aria-describedBy';
    const ariaInvalid = 'aria-invalid';
    const exampleId = 'example-id';

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [MarkInvalidDirective, TestComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .createComponent(TestComponent);
    });

    it('should set aria-invalid attribute to value "true" if passed a string', () => {
        fixture.componentInstance.errorTextId = exampleId;
        fixture.detectChanges();
        const inputElement: HTMLElement = fixture.nativeElement.querySelector('input');
        expect(inputElement.getAttribute(ariaInvalid)).toBe('true');
    });

    it('should set aria-describedBy attribute with the passed string as a value', () => {
        fixture.componentInstance.errorTextId = exampleId;
        fixture.detectChanges();
        const inputElement: HTMLElement = fixture.nativeElement.querySelector('input');
        expect(inputElement.getAttribute(ariaDescribedBy)).toBe(exampleId);
    });

    it('should not set aria-invalid attribute if passed an empty string', () => {
        fixture.componentInstance.errorTextId = '';
        fixture.detectChanges();
        const inputElement: HTMLElement = fixture.nativeElement.querySelector('input');
        expect(inputElement.getAttribute(ariaInvalid)).toBe(null);
    });

    it('should not set aria-describedBy attribute if passed an empty string', () => {
        fixture.componentInstance.errorTextId = '';
        fixture.detectChanges();
        const inputElement: HTMLElement = fixture.nativeElement.querySelector('input');
        expect(inputElement.getAttribute(ariaDescribedBy)).toBe(null);
    });

    it('should remove previously set attributes if passed an empty string', () => {
        // Define form element as invalid
        fixture.componentInstance.errorTextId = exampleId;
        fixture.detectChanges();
        const inputElement: HTMLElement = fixture.nativeElement.querySelector('input');
        expect(inputElement.getAttribute(ariaDescribedBy)).toBe(exampleId);
        expect(inputElement.getAttribute(ariaInvalid)).toBe('true');

        // Remove invalid status
        fixture.componentInstance.errorTextId = '';
        fixture.detectChanges();
        expect(inputElement.getAttribute(ariaDescribedBy)).toBe(null);
        expect(inputElement.getAttribute(ariaInvalid)).toBe(null);
    });
});
