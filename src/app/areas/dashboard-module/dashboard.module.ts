import { MyNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutesModule } from './dashboard-routes.module';
import { ProductsComponent } from './products/products.component';
import { TranslateModule } from '@ngx-translate/core';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
// export function httpTranslateLoader(http: HttpClient) {
// 	return new TranslateHttpLoader(http);
// }

@NgModule({
	imports: [
		CommonModule,
		DashboardRoutesModule,
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
		MyNgZorroAntdModule,
		//HttpClientModule,
		TranslateModule
		// TranslateModule.forChild({
		// 	loader: {
		// 		provide: TranslateLoader,
		// 		useFactory: httpTranslateLoader,
		// 		deps: [HttpClient]
		// 	}
		// })
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
