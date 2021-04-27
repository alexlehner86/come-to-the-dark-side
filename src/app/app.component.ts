import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { FACTS_ROUTE, FORM_ROUTE, HOME_ROUTE } from './constants/routes.constants';

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

    private readonly pageTitle = 'Come To The Dark Side';
    /**
     * Name needs to match CSS class defined in styles.scss
     */
    private readonly specialDarkModeCssClass = 'special-dark-mode';

    constructor(
        private router: Router,
        private titleService: Title,
        @Inject(DOCUMENT) private document: Document
    ) { }

    public ngOnInit(): void {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(event => {
            this.updatePageTitle(event as any);
            this.updateSkipLinks();
        });
    }

    public onToggleDarkMode(): void {
        this.classes = this.isSpecialDarkModeOn ? '' : this.specialDarkModeCssClass;
        this.isSpecialDarkModeOn = !this.isSpecialDarkModeOn;
    }

    private updatePageTitle(event: NavigationEnd): void {
        switch (true) {
            case event.urlAfterRedirects.endsWith(HOME_ROUTE):
                this.titleService.setTitle(`${this.pageTitle}: Home`);
                break;
            case event.urlAfterRedirects.endsWith(FACTS_ROUTE):
                this.titleService.setTitle(`${this.pageTitle}: Accessibilty Facts`);
                break;
            case event.urlAfterRedirects.endsWith(FORM_ROUTE):
                this.titleService.setTitle(`${this.pageTitle}: Form Example`);
                break;
            default:
                this.titleService.setTitle(this.pageTitle);
        }
    }

    private updateSkipLinks(): void {
        const mainContentAnchor = '#' + this.mainContentId;
        const navigationAnchor = '#' + this.navigationId;
        if (!this.router.url.endsWith(mainContentAnchor) && !this.router.url.endsWith(navigationAnchor)) {
            const pathname = this.document.defaultView?.location.pathname;
            this.skipLinkToMain = `${pathname}${mainContentAnchor}`;
            this.skipLinkToNavigation = `${pathname}${navigationAnchor}`;
        }
    }
}
