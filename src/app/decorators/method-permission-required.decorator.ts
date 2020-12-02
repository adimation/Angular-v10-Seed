import { UserService } from './../core/services/user.service';
import { of } from 'rxjs';
import { PermissionsEnum } from 'src/app/enums/permission.enum';
import { AppInjector } from '../app.injector';

//decorator will return "returnObject" if user doesn't have permission
// export function MethodPermissionRequired(permission: PermissionsEnum, returnObject: any = {}) {
//     return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
//         const original = descriptor.value;
//         const injector = AppInjector.getInjector();
//         const userService = injector.get(UserService);

//         descriptor.value = function (...args: any[]) {
//             if (userService.hasPermission(permission)) {
//                 const result = original.apply(this, args);
//                 return result;
//             } else {
//                 return of<any>(returnObject);
//             }
//         };

//         return descriptor;
//     };
// }


//usage
// @MethodPermissionRequired(PermissionsEnum.PERM_LIST_PRODUCTS, [])
// public getAllProducts(): Observable<Array<ProductDTO>> {
//     return this.get<Array<ProductDTO>>('products');
// }