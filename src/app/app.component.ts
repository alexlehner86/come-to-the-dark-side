import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

import { PAGE_TITLE, SUBPAGE_FACTS_TITLE, SUBPAGE_FORM_TITLE } from './constants/app.constants';
import { FACTS_ROUTE, FORM_ROUTE } from './constants/routes.constants';

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

    private isInitialNavigation = true;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private titleService: Title,
        private translateService: TranslateService,
        @Inject(DOCUMENT) private document: Document
    ) {
        this.initTranslations();
    }

    public ngOnInit(): void {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(event => {
            const navEvent = event as any as NavigationEnd;
            this.updateSkipLinks();
            if (!this.isInitialNavigation) {
                this.updatePageTitle(navEvent.urlAfterRedirects);
            }
            this.isInitialNavigation = false;
        });
    }

    public onToggleDarkMode(): void {
        this.classes = this.isSpecialDarkModeOn ? '' : this.specialDarkModeCssClass;
        this.isSpecialDarkModeOn = !this.isSpecialDarkModeOn;
    }

    private initTranslations(): void {
        // This language will be used as a fallback when a translation isn't found in the current language
        this.translateService.setDefaultLang('en');

        // The default lang to use. If the lang isn't available, it will use the current loader to get them
        this.translateService.use('en');

        // If URL parameter "lang" was set, then change translations to provided language
        this.route.queryParams.subscribe(params => {
            if (params.lang && ['de', 'en'].includes(params.lang)) {
                this.translateService.use(params.lang);
                // Set lang attribute of html tag for assistive technologies.
                this.document.documentElement.setAttribute('lang', params.lang);
                this.updatePageTitle(this.document.URL, params.lang);
            }
        });
    }

    private updatePageTitle(url: string, lang?: string): void {
        const langToUse = lang ?? this.translateService.currentLang;
        switch (true) {
            case url.includes('/' + FACTS_ROUTE):
                this.titleService.setTitle(SUBPAGE_FACTS_TITLE[langToUse]);
                break;
            case url.includes('/' + FORM_ROUTE):
                this.titleService.setTitle(SUBPAGE_FORM_TITLE[langToUse]);
                break;
            default:
                this.titleService.setTitle(PAGE_TITLE[langToUse]);
        }
    }

    private updateSkipLinks(): void {
        const mainContentAnchor = '#' + this.mainContentId;
        const navigationAnchor = '#' + this.navigationId;
        if (!this.router.url.endsWith(mainContentAnchor) && !this.router.url.endsWith(navigationAnchor)) {
            const { pathname, search } = this.document.defaultView?.location ?? {};
            this.skipLinkToMain = `${pathname}${search}${mainContentAnchor}`;
            this.skipLinkToNavigation = `${pathname}${search}${navigationAnchor}`;
        }
    }
}
