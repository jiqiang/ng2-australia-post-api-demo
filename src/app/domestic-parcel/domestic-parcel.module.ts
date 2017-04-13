import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomesticParcelComponent } from './domestic-parcel.component';
import { DomesticParcelRoutingModule } from './domestic-parcel-routing.module';
import "hammerjs";

@NgModule({
  imports: [
    DomesticParcelRoutingModule,
    CommonModule
  ],
  declarations: [ DomesticParcelComponent ],
  providers: []
})
export class DomesticParcelModule {}
