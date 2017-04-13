import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternationalParcelComponent } from './international-parcel.component';
import { InternationalParcelRoutingModule } from './international-parcel-routing.module';
import "hammerjs";

@NgModule({
  imports: [
    InternationalParcelRoutingModule,
    CommonModule
  ],
  declarations: [ InternationalParcelComponent ],
  providers: []
})
export class InternationalParcelModule {}
