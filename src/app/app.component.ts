import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import defaultLanguage from "./../assets/i18n/en.json";

@Component({
	selector: 'app-root',
	template: `
		<app-spinner></app-spinner>
		<router-outlet></router-outlet>
    `,
})
export class AppComponent {
	constructor(private translate: TranslateService) {
		translate.setTranslation('en', defaultLanguage);
		translate.setDefaultLang('en');
	}
}
