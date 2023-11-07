import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/authGuard';

const appRoutes: Routes = [
  {path:'', loadChildren: () => import('./feature/user/user.module').then((m) => m.UserModule)},
  {path:'admin', canActivate:[AuthGuard], loadChildren: () => import('./feature/admin/admin.module').then((m) => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
