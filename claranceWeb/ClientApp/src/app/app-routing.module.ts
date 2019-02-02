import { ComponentTreeComponent } from './component-tree/component-tree.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path: 'component-tree',
  component: ComponentTreeComponent,
  data: {title: 'Component Tree'}
},
{
  path: '',
  redirectTo: '/component-tree',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
