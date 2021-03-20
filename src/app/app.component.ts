import { Component, HostBinding, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @HostBinding('class') classes = '';
    @HostBinding('id') id = 'app-container';

    public isSpecialDarkModeOn = false;
    public skipLinkToMain = '';
    public skipLinkToNavigation = '';
    public readonly mainContentId = 'main-content';
    public readonly navigationId = 'navigation';

    /**
     * Name needs to match CSS class defined in styles.scss
     */
    private readonly specialDarkModeCssClass = 'special-dark-mode';

    constructor(
        private router: Router
    ) { }

    public ngOnInit(): void {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
            const mainContentAnchor = '#' + this.mainContentId;
            const navigationAnchor = '#' + this.navigationId;
            if (!this.router.url.endsWith(mainContentAnchor) && !this.router.url.endsWith(navigationAnchor)) {
                this.skipLinkToMain = `${this.router.url}${mainContentAnchor}`;
                this.skipLinkToNavigation = `${this.router.url}${navigationAnchor}`;
            }
        });
    }

    public onToggleDarkMode(): void {
        this.classes = this.isSpecialDarkModeOn ? '' : this.specialDarkModeCssClass;
        this.isSpecialDarkModeOn = !this.isSpecialDarkModeOn;
    }
}
