//our root app component
import {Component, NgModule, VERSION} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'testing',
  template: `
    <div>
      <h2>Hello {{name}}</h2>
    </div>
  `,
})
export class TestingComponents{
  name:string;
  constructor() {
    this.name = `Angular! v${VERSION.full}`
  }
}

@NgModule({
  imports: [ CommonModule ],
  declarations: [ TestingComponents ],
  bootstrap: [ TestingComponents ],
    entryComponents: [TestingComponents]
})
export class TestingModule {}
