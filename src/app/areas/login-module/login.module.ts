import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SharedModule } from '../../shared/shared.module';
import { LoginRoutesModule } from './login-routes.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MyNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
	imports: [
		CommonModule,
		LoginRoutesModule,
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
		NzIconModule,
		NzFormModule,
		NzButtonModule,
		NzLayoutModule,
		NzInputModule
	],
	declarations: [
		LoginComponent,
		ForgotPasswordComponent,
		ResetPasswordComponent
	]
})
export class LoginModule { }
