import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'ViewProducts',
    loadComponent:()=>
    import('../products/view-all/view-all.component').then(
      (Component) => Component.ViewAllComponent
    )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
