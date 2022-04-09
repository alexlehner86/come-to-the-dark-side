import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-form-example',
    templateUrl: './form-example.component.html',
    styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent {

    @ViewChild('emailInputElementRef') emailInput: ElementRef | undefined;
    @ViewChild('fullNameInputElementRef') fullNameInput: ElementRef | undefined;

    public checkedTestingTools = '';
    public email = '';
    public gender = '';
    public favoriteScreenReader = '';
    public fullName = '';
    public isSuccessfullySubmitted = false;
    public markInvalidFields = false;
    public phoneNumber = '';
    public successMessage = '';

    /**
     * They are also used as translate keys for displaying the radio button label.
     */
    public readonly screenReaders: string[] = [
        'jaws', 'nvda', 'talkback', 'voiceover', 'all'
    ];
    public readonly testingTools: { name: string, checked: boolean }[] = [
        { name: 'Accessibility Insights', checked: false },
        { name: 'axe (deque)', checked: false },
        { name: 'Lighthouse (Chrome DevTools)', checked: false },
        { name: 'tota11y', checked: false },
        { name: 'WAVE', checked: false },
        { name: 'W3C Validator', checked: false },
    ];

    constructor(
        private liveAnnouncer: LiveAnnouncer,
        private translateService: TranslateService,
    ) {
        this.favoriteScreenReader = this.screenReaders[0];
    }

    public onSubmit(exampleForm: NgForm): void {
        if (exampleForm.valid) {
            this.checkedTestingTools = this.testingTools.filter(tool => tool.checked).map(tool => tool.name).join(', ');
            this.successMessage = this.translateService.instant('form.success.message', { name: this.fullName });
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
