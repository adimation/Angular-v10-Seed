import { LoggerService } from '../../../core/services/logger.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../core/abstraction/base-component';
import { ApplicationService } from '../../../core/services/application.service';
import { ApplicationUserService } from 'src/app/services/application-user.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit {
    public value: string = 'John';

    constructor(
        protected applicationService: ApplicationService,
        protected loggerService: LoggerService,
        protected applicationUserService: ApplicationUserService,
    ) {
        super(applicationService, loggerService);
    }

    public ngOnInit(): void {
    }
}
