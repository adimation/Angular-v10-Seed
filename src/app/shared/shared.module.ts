import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BackgroundAnimationComponent } from './components/background-animation/background-animation.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HasPermissionDirective } from './directives/has-permission.directive';
import { HasRoleDirective } from './directives/has-role.directive';
import { RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		LayoutComponent,
		HasPermissionDirective,
		HasRoleDirective,
		BackgroundAnimationComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		NzLayoutModule,
		NzDropDownModule
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		LayoutComponent,
		HasPermissionDirective,
		HasRoleDirective,
		BackgroundAnimationComponent,
	]
})
export class SharedModule { }
