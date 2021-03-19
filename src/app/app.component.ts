import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @HostBinding('class') classes = '';
    @HostBinding('id') id = 'app-container';

    public isSpecialDarkModeOn = false;

    /**
     * Name needs to match CSS class defined in styles.scss
     */
    private readonly specialDarkModeCssClass = 'special-dark-mode';

    public onToggleDarkMode() {
        this.classes = this.isSpecialDarkModeOn ? '' : this.specialDarkModeCssClass;
        this.isSpecialDarkModeOn = !this.isSpecialDarkModeOn;
    }
}
