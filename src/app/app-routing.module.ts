import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'some-module',
    /* loadChildren: 'app/some-module/some-module.module#SomeModuleModule' */
    loadChildren: () => {
      return import('./some-module/some-module.module').then((comp: any) => {
        console.log(comp)
        return comp.SomeModuleModule;
      });
    }
  },
  {
    path: 'some-module1',
    loadChildren: 'app/some-module1/some-module.module1#SomeModuleModule1'
  },
  { path: '',   redirectTo: '/some-module1', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
