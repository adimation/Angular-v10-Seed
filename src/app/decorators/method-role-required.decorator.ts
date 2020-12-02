import { UserService } from './../core/services/user.service';
import { of } from 'rxjs';
import { AppInjector } from '../app.injector';
import { RolesEnum } from '../enums/role.enum';

//decorator will return "returnObject" if user doesn't have permission
// export function MethodRoleRequired(role: RolesEnum, returnObject: any = {}) {
//     return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
//         const original = descriptor.value;
//         const injector = AppInjector.getInjector();
//         const userService = injector.get(UserService);

//         descriptor.value = function (...args: any[]) {
//             if (userService.hasRole(role)) {
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
// @MethodRoleRequired(Role.ADMIN, [])
// public getAllProducts(): Observable<Array<ProductDTO>> {
//     return this.get<Array<ProductDTO>>('products');
// }