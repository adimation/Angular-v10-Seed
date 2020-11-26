import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { SharedModule } from './shared/shared.module';
import { MyNgZorroAntdModule } from './ng-zorro-antd.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SpinnerComponent } from './core/spinner/spinner.component';
import { ApplicationUserService } from './services/application-user.service';

registerLocaleData(en);

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		IconsProviderModule,
		NzLayoutModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		CoreModule,
		SharedModule,
	],
	providers: [
		{ provide: NZ_I18N, useValue: en_US },
		ApplicationUserService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
