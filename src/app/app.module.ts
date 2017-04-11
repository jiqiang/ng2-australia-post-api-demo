import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AustraliaPostAPIModule } from 'ng2-australia-post-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomesticLetterComponent } from './domestic-letter/domestic-letter.component';
// import { DomesticParcelComponent } from './domestic-parcel/domestic-parcel.component';
// import { InternationalParcelComponent } from './international-parcel/international-parcel.component';
// import { InternationalLetterComponent } from './international-letter/international-letter.component';
// import { DomesticLetterServiceComponent } from './domestic-letter-service/domestic-letter-service.component';

@NgModule({
  declarations: [
    AppComponent,
    DomesticLetterComponent
    // DomesticParcelComponent,
    // InternationalParcelComponent,
    // InternationalLetterComponent,
    // DomesticLetterServiceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    AustraliaPostAPIModule.forRoot({auth_key: 'e6f7e18e-c319-46d2-84b3-4f8177f0d8f2'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
