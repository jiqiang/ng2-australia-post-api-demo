import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {DomesticLetterComponent } from './domestic-letter.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'domestic-letter', component: DomesticLetterComponent }
    ])
  ],
  exports: [ RouterModule ]
})
export class DomesticLetterRoutingModule {}
