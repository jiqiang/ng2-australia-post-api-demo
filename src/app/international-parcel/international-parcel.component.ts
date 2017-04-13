import { Component, OnInit } from '@angular/core';
import { PACService } from '../pac/pac.service';

@Component({
  selector: 'app-international-parcel',
  templateUrl: './international-parcel.component.html',
  styleUrls: ['./international-parcel.component.scss']
})
export class InternationalParcelComponent implements OnInit {
  private countries: any[];
  private mode: string;

  constructor(private pacService: PACService) {
    this.mode = "indeterminate";
  }

  ngOnInit() {
    this.pacService.getCountries()
      .then(countries => this.countries = countries);
  }

}
