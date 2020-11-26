import { MyNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutesModule } from './dashboard-routes.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
	imports: [
		CommonModule,
		DashboardRoutesModule,
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
		MyNgZorroAntdModule
	],
	declarations: [
		DashboardComponent,
		ProductsComponent,
	],
	providers: [
	],
	entryComponents: [
	]
})
export class DashboardModule { }
