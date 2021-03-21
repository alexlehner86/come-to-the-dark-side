import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-form-example',
    templateUrl: './form-example.component.html',
    styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent {

    public areErrorTextsVisible = false;
    public email = '';
    public favoriteScreenReader = '';
    public fullName = '';
    public isSuccessfullySubmitted = false;
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
        this.areErrorTextsVisible = true;
        if (exampleForm.valid) {
            this.successMessage = `Congratulations ${this.fullName}! You've successfully submitted the form.`;
            this.isSuccessfullySubmitted = true;
            this.liveAnnouncer.announce(this.successMessage);
        }
    }
}
