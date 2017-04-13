import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomesticLetterModule } from './domestic-letter/domestic-letter.module';

import { PostageAssessmentCalculatorModule } from './pac';

import "hammerjs";

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    DomesticLetterModule,
    AppRoutingModule,
    PostageAssessmentCalculatorModule.forRoot({auth_key: 'e6f7e18e-c319-46d2-84b3-4f8177f0d8f2'})
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
