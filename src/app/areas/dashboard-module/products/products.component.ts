import { LoggerService } from './../../../core/services/logger.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/abstraction/base-component';
import { ApplicationService } from 'src/app/core/services/application.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {
    public loading: boolean = false;
    public total: number = 20;
    public pageIndex: number = 20;
    public pageSize: number = 20;
    public products: any;

    public product: string = "A";

    constructor(protected applicationService: ApplicationService, protected loggerService: LoggerService) {
        super(applicationService, loggerService);

        this.products = [
            { Image: "testImageUrl", ProductName: "Product Name", URL: "url", Price: 2000 },
            { Image: "testImageUrl", ProductName: "Product Name", URL: "url", Price: 2000 },
            { Image: "testImageUrl", ProductName: "Product Name", URL: "url", Price: 2000 },
            { Image: "testImageUrl", ProductName: "Product Name", URL: "url", Price: 2000 },
            { Image: "testImageUrl", ProductName: "Product Name", URL: "url", Price: 2000 },
            { Image: "testImageUrl", ProductName: "Product Name", URL: "url", Price: 2000 },
            { Image: "testImageUrl", ProductName: "Product Name", URL: "url", Price: 2000 },
            { Image: "testImageUrl", ProductName: "Product Name", URL: "url", Price: 2000 },
            { Image: "testImageUrl", ProductName: "Product Name", URL: "url", Price: 2000 },
            { Image: "testImageUrl", ProductName: "Product Name", URL: "url", Price: 2000 },
            { Image: "testImageUrl", ProductName: "Product Name", URL: "url", Price: 2000 },
            { Image: "testImageUrl", ProductName: "Product Name", URL: "url", Price: 2000 },
            { Image: "testImageUrl", ProductName: "Product Name", URL: "url", Price: 2000 },
            { Image: "testImageUrl", ProductName: "Product Name", URL: "url", Price: 2000 },
            { Image: "testImageUrl", ProductName: "Product Name", URL: "url", Price: 2000 },
            { Image: "testImageUrl", ProductName: "Product Name", URL: "url", Price: 2000 },
            { Image: "testImageUrl", ProductName: "Product Name", URL: "url", Price: 2000 },
            { Image: "testImageUrl", ProductName: "Product Name", URL: "url", Price: 2000 },
            { Image: "testImageUrl", ProductName: "Product Name", URL: "url", Price: 2000 },
            { Image: "testImageUrl", ProductName: "Product Name", URL: "url", Price: 2000 }
        ]
    }

    ngOnInit(): void {
    }

    public submitForm(reset: boolean): void {

    }

    public notification(): void {
        this.applicationService.showSuccessNotification('Success', 'Notification shown successfully!');
        this.applicationService.showSuccessToast('Toast shown successfully!');
    }
}
