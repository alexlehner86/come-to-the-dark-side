import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-form-example',
    templateUrl: './form-example.component.html',
    styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent {

    public email = '';
    public favoriteScreenReader = '';
    public fullName = '';
    public isSubmitted = false;
    public phoneNumber = '';

    public readonly screenReaders: string[] = [
        'JAWS', 'NVDA', 'TalkBack', 'VoiceOver'
    ];

    constructor() {
        this.favoriteScreenReader = this.screenReaders[0];
    }

    public onSubmit(exampleForm: NgForm): void {
        this.isSubmitted = true;
        console.log(exampleForm.form.value);
        console.log('is valid', exampleForm.valid);
    }
}
