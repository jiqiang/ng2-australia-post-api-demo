import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DomesticLetterComponent } from './domestic-letter/domestic-letter.component';
import { DomesticParcelComponent } from './domestic-parcel/domestic-parcel.component';
import { InternationalLetterComponent } from './international-letter/international-letter.component';
import { InternationalParcelComponent } from './international-parcel/international-parcel.component';

const routes: Routes = [
  { path: '', redirectTo: '/domestic-letter', pathMatch: 'full' },
  { path: 'domestic-letter', component: DomesticLetterComponent },
  { path: 'domestic-parcel', component: DomesticParcelComponent },
  { path: 'international-letter', component: InternationalLetterComponent },
  { path: 'international-parcel', component: InternationalParcelComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
