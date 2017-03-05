import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AustraliaPostAPIModule } from 'ng2-australia-post-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AustraliaPostAPIModule.forRoot({auth_key: 'e6f7e18e-c319-46d2-84b3-4f8177f0d8f2'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
