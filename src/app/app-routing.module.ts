import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'domestic-letter', pathMatch: 'full' },
  { path: 'domestic-parcel', loadChildren: 'app/domestic-parcel/domestic-parcel.module#DomesticParcelModule' },
  { path: 'international-letter', loadChildren: 'app/international-letter/international-letter.module#InternationalLetterModule' },
  { path: 'international-parcel', loadChildren: 'app/international-parcel/international-parcel.module#InternationalParcelModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
