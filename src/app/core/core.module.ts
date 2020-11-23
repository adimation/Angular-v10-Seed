import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { BaseComponent } from './abstraction/base-component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { BaseService } from './abstraction/base-service';
import { LoggerService } from './services/logger.service';
import { SpinnerService } from './spinner/spinner.service';
import { ApplicationService } from './services/application.service';
import { AppSettings, APP_SETTINGS } from './app-settings';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';
import { AntiAuthGuard } from './guards/anti-auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
	declarations: [
		SpinnerComponent,
        BaseComponent
	],
	imports: [
		CommonModule,
		NzNotificationModule,
		NzSpinModule
	],
	exports: [
		SpinnerComponent,
        BaseComponent
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        BaseService,
        LoggerService,
        SpinnerService,
        ApplicationService,
        { provide: APP_SETTINGS, useValue: AppSettings },
        AuthGuard,
        AntiAuthGuard,
        // GlobalPermissionGuard,
        UserService
	]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}