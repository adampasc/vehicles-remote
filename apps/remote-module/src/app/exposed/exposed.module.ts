import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExposedComponent } from './exposed.component';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';

@NgModule({
  declarations: [ExposedComponent],
  imports: [CommonModule, PorscheDesignSystemModule.load({prefix: 'remote'})],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExposedModule {
  // this method is called from the host to find names for components it should display
  static getSharedComponents() {
    return {
      'ExposedComponent': ExposedComponent
    };
  }
}
