import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPageDirective } from './current-page.directive';

@Component({
    template: '<a href="/somepage" [appCurrentPage]="isCurrentPage">Some Page</a>'
})
class TestComponent {
    public isCurrentPage = false;
}

describe('CurrentPageDirective', () => {
    let fixture: ComponentFixture<TestComponent>;
    const ariaCurrent = 'aria-current';

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [CurrentPageDirective, TestComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .createComponent(TestComponent);
    });

    it('should set aria-current attribute to value "page" if passed true', () => {
        fixture.componentInstance.isCurrentPage = true;
        fixture.detectChanges();
        const link: HTMLElement = fixture.nativeElement.querySelector('a');
        expect(link.getAttribute(ariaCurrent)).toBe('page');
    });

    it('should not set aria-current attribute if passed false', () => {
        fixture.componentInstance.isCurrentPage = false;
        fixture.detectChanges();
        const link: HTMLElement = fixture.nativeElement.querySelector('a');
        expect(link.getAttribute(ariaCurrent)).toBe(null);
    });

    it('should remove previously set aria-current attribute if passed false', () => {
        // Define link as current page
        fixture.componentInstance.isCurrentPage = true;
        fixture.detectChanges();
        const link: HTMLElement = fixture.nativeElement.querySelector('a');
        expect(link.getAttribute(ariaCurrent)).toBe('page');

        // Remove current page setting
        fixture.componentInstance.isCurrentPage = false;
        fixture.detectChanges();
        expect(link.getAttribute(ariaCurrent)).toBe(null);
    });
});
