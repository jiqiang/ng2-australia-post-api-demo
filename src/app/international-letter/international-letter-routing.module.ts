import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InternationalLetterComponent } from './international-letter.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: 'international-letter', pathMatch: 'full' },
      { path: 'international-letter', component: InternationalLetterComponent }
    ])
  ],
  exports: [ RouterModule ]
})
export class InternationalLetterRoutingModule {}
