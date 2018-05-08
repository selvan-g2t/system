import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SomeModuleRoutingModule1 } from './some-module-routing.module1';
import { InfoComponent1 } from './info.component1';

@NgModule({
  imports: [
    CommonModule,
    SomeModuleRoutingModule1
  ],
  declarations: [InfoComponent1]
})
export class SomeModuleModule1 { }
