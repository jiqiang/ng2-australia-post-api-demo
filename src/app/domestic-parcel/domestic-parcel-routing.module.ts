import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {DomesticParcelComponent } from './domestic-parcel.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'domestic-parcel', component: DomesticParcelComponent }
    ])
  ],
  exports: [ RouterModule ]
})
export class DomesticParcelRoutingModule {}
