import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternationalLetterComponent } from './international-letter.component';
import { InternationalLetterRoutingModule } from './international-letter-routing.module';
import "hammerjs";

@NgModule({
  imports: [
    InternationalLetterRoutingModule,
    CommonModule
  ],
  declarations: [ InternationalLetterComponent ],
  providers: []
})
export class InternationalLetterModule {}
