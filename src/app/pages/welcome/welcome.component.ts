import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/abstraction/base-component';
import { ApplicationService } from 'src/app/core/services/application.service';
import { LoggerService } from 'src/app/core/services/logger.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent extends BaseComponent implements OnInit {

  constructor(protected applicationService: ApplicationService,
    protected loggerService: LoggerService) { 
      super(applicationService, loggerService);
  }

  ngOnInit() {
  }

  test() {
    this.applicationService.showInfoNotification("Test", "Success");
  }

}
