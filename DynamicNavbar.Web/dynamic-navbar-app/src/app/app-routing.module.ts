import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'elektronik',
    loadChildren: () => import('./modules/dynamic1/dynamic1.module').then(m => m.Dynamic1Module)
  },
  {
    path: 'giyim',
    loadChildren: () => import('./modules/dynamic2/dynamic2.module').then(m => m.Dynamic2Module)
  },
  {
    path: 'spor',
    loadChildren: () => import('./modules/dynamic3/dynamic3.module').then(m => m.Dynamic3Module)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
