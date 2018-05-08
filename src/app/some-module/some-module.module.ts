import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SomeModuleRoutingModule } from './some-module-routing.module';
import { InfoComponent } from './info.component';

@NgModule({
  imports: [
    CommonModule,
    SomeModuleRoutingModule
  ],
  declarations: [InfoComponent]
})
export class SomeModuleModule { }
