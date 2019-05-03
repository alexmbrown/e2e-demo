import { NgModule } from '@angular/core';
import { PanelComponent } from './components/panel/panel.component';
import { MatCardModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [PanelComponent],
  exports: [
    PanelComponent
  ],
  imports: [
    MatCardModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
