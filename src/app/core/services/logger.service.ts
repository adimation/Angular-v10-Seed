import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { APP_SETTINGS, IAppSettings } from '../app-settings';
import { ApplicationService } from './application.service';
import { UserService } from './user.service';

interface ILog {
    date: Date;
    log: string;
    component: string;
    method: string;
}

@Injectable()
export class LoggerService {

    public currentMethod: string;

    constructor(
        @Inject(APP_SETTINGS) protected config: IAppSettings,
        protected applicationService: ApplicationService,
        protected userService: UserService,
        protected http: HttpClient
    ) {
        this.currentMethod = '';
    }

    public info(...msg: any[]): void {
        if (environment.loggerEnabled) {
            console.info(msg);
        }
    }

    public debug(...msg: any[]): void {
        if (environment.loggerEnabled) {
            console.debug(msg);
        }
    }

    public warn(...msg: any[]): void {
        if (environment.loggerEnabled) {
            console.error(msg);
        }
    }

    public error(...msg: any[]): void {
        if (environment.loggerEnabled) {
            console.error(msg);
        }
    }
}