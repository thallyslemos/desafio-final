import { DashboardGuard } from './autenticacao/dashboard.guard';
import { LoginGuard } from './autenticacao/login.guard';
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', loadChildren: ()=> import('./login/login.module').then(m => m.LoginModule),
  canLoad: [LoginGuard]},
  {path: 'home', loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule),
  canLoad: [AutenticacaoGuard]
  },
  {path: 'dashboard', loadChildren: ()=> import('./dashboard/dashboard.module').then(m =>m.DashboardModule),
  canLoad: [DashboardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
