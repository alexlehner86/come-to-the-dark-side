import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-form-example',
    templateUrl: './form-example.component.html',
    styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent {

    @ViewChild('emailInputElementRef') emailInput: ElementRef | undefined;
    @ViewChild('fullNameInputElementRef') fullNameInput: ElementRef | undefined;

    public email = '';
    public favoriteScreenReader = '';
    public fullName = '';
    public isSuccessfullySubmitted = false;
    public knownTestingTools: { name: string, checked: boolean }[] = [
        { name: 'Accessibility Insights', checked: false },
        { name: 'axe (deque)', checked: false },
        { name: 'Lighthouse (Chrome DevTools)', checked: false },
        { name: 'tota11y', checked: false },
        { name: 'WAVE', checked: false },
        { name: 'W3C Validator', checked: false },
    ];
    public markInvalidFields = false;
    public phoneNumber = '';
    public successMessage = '';

    public readonly screenReaders: string[] = [
        'JAWS', 'NVDA', 'TalkBack', 'VoiceOver', 'I love them all!'
    ];

    constructor(
        private liveAnnouncer: LiveAnnouncer
    ) {
        this.favoriteScreenReader = this.screenReaders[0];
    }

    public onSubmit(exampleForm: NgForm): void {
        if (exampleForm.valid) {
            this.successMessage = `Congratulations ${this.fullName}! You've successfully submitted the form.`;
            this.isSuccessfullySubmitted = true;
            this.liveAnnouncer.announce(this.successMessage);
        } else {
            this.markInvalidFields = true;
            if (!this.fullName) {
                this.fullNameInput?.nativeElement.focus();
            } else {
                this.emailInput?.nativeElement.focus();
            }
        }
    }
}
