import { Component } from '@angular/core';
import { PacService } from 'ng2-australia-post-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  countries: any[];

  constructor(private pacService: PacService) {
    this.pacService.getCountries()
      .then(countries => this.countries = countries);
  }
}
