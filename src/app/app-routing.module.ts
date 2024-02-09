import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  {
    path:'',
    component:FirstComponent
  },
  {
    path: 'Products',
    loadChildren: () =>
      import('../app/products/products.module').then((module)=>module.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
