import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { FabPanelComponent, FabPanelHeaderComponent } from './panel.component';

const components = [
  FabPanelComponent,
  FabPanelHeaderComponent,
];

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
  schemas: [NO_ERRORS_SCHEMA]
})
export class FabPanelModule {

  constructor() {
    // Add any React elements to the registry (used by the renderer).
    registerElement('Panel', () => Panel);
  }

}
