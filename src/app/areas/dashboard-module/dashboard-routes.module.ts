import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { PermissionsEnum } from 'scr/app/enums/permission.enum';
//import { GlobalPermissionGuard } from 'src/app/core/guards/global-permission.guard';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'products',
                component: ProductsComponent,
                //canActivate: [GlobalPermissionGuard],
                //data: { globalComponentPermissions: [PermissionsEnum[PermissionsEnum.PERM_LIST_PRODUCTS]] }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutesModule { }
