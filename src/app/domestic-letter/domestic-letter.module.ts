import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { DomesticLetterComponent } from './domestic-letter.component';
import { DomesticLetterRoutingModule } from './domestic-letter-routing.module';
import "hammerjs";

@NgModule({
  imports: [
    DomesticLetterRoutingModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  declarations: [DomesticLetterComponent ],
  providers: []
})
export class DomesticLetterModule {}
