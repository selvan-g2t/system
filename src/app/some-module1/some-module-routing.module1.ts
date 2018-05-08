import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent1 }     from './info.component1';

const routes: Routes = [
  {
    path: '',
    component: InfoComponent1
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SomeModuleRoutingModule1 { }
