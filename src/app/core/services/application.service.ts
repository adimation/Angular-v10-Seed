import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationType } from '../enums/notification-type.enum';
import { IAppSettings, APP_SETTINGS } from '../app-settings';
import { LocalStorageService } from './local-storage.service';
import { SpinnerService } from 'src/app/core/spinner/spinner.service';
import { ReturnStatement } from '@angular/compiler';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ToastType } from '../enums/toast-type.enum';

@Injectable()
export class ApplicationService {

    constructor(
        @Inject(APP_SETTINGS) protected config: IAppSettings,
        public router: Router,
        public notificationService: NzNotificationService,
        public notificationConfig: NzConfigService,
        public spinnerService: SpinnerService,
        public message: NzMessageService
    ) {
        this.notificationConfig.set("notification", {
            nzPlacement: this.config.notificationPlacement,
            nzAnimate: true,
            // nzDuration: 100000
        });
    }

    private showNotification(title: string, message: string, type: NotificationType): void {
        switch (type) {
            case NotificationType.Success:
                this.notificationService.success(title, message);
                break;
            case NotificationType.Info:
                this.notificationService.info(title, message);
                break;
            case NotificationType.Warning:
                this.notificationService.warning(title, message);
                break;
            case NotificationType.Error:
                this.notificationService.error(title, message);
                break;
            default:
                this.notificationService.info(title, message);
                break;
        }
    }

    public showSuccessNotification(title: string, message: string): void {
        this.showNotification(title, message, NotificationType.Success);
    }

    public showInfoNotification(title: string, message: string): void {
        this.showNotification(title, message, NotificationType.Info);
    }

    public showWarningNotification(title: string, message: string): void {
        this.showNotification(title, message, NotificationType.Warning);
    }

    public showErrorNotification(title: string, message: string): void {
        this.showNotification(title, message, NotificationType.Error);
    }

    private showToast(message: string, type: ToastType): void {
        switch (type) {
            case ToastType.Success:
                this.message.success(message);
                break;
            case ToastType.Info:
                this.message.info(message);
                break;
            case ToastType.Warning:
                this.message.warning(message);
                break;
            case ToastType.Error:
                this.message.error(message);
                break;
            case ToastType.Loading:
                this.message.loading(message);
                break;
            default:
                this.message.info(message);
                break;
        }
    }

    public showSuccessToast(message: string): void {
        this.showToast(message, ToastType.Success);
    }

    public showInfoToast(message: string): void {
        this.showToast(message, ToastType.Info);
    }

    public showWarningToast(message: string): void {
        this.showToast(message, ToastType.Warning);
    }

    public showErrorToast(message: string): void {
        this.showToast(message, ToastType.Error);
    }

    public showLoadingToast(message: string): void {
        this.showToast(message, ToastType.Loading);
    }

    public showLoaderOverlay(): void {
        this.spinnerService.show();
    }

    public hideLoaderOverlay(): void {
        this.spinnerService.hide();
    }

    public cloneObject<T>(obj: T): T {
        return JSON.parse(JSON.stringify(obj));
    }

    public getApplicationVersion(): string {
        return 'v' + this.config.currentVersion;
    }
}