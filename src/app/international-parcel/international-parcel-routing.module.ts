import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InternationalParcelComponent } from './international-parcel.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: 'international-parcel', pathMatch: 'full' },
      { path: 'international-parcel', component: InternationalParcelComponent }
    ])
  ],
  exports: [ RouterModule ]
})
export class InternationalParcelRoutingModule {}
