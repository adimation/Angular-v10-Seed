import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	// { path: '', pathMatch: 'full', redirectTo: '' },
	{
		path: 'login',
		//canActivate: [AntiAuthGuard],
		loadChildren: () => import('./areas/login-module/login.module').then(m => m.LoginModule)
	},
	{
		path: '',
		//canActivate: [AuthGuard, GlobalPermissionGuard],
		loadChildren: () => import('./areas/dashboard-module/dashboard.module').then(m => m.DashboardModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
