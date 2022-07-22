import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) 
  }, 
  { 
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
