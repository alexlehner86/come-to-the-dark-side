import { TranslateService } from '@ngx-translate/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    public isGerman = false;

    private subscriptions: Subscription[] = [];

    constructor(
        private translateService: TranslateService
    ) { }

    public ngOnInit(): void {
        this.subscriptions.push(
            this.translateService.onLangChange.subscribe(({ lang }) => {
                this.isGerman = lang === 'de';
            })
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
