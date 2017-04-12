import { Component, OnInit } from '@angular/core';
import { PACService } from '../../pac/pac.service';

@Component({
  selector: 'app-international-parcel',
  templateUrl: './international-parcel.component.html',
  styleUrls: ['./international-parcel.component.scss']
})
export class InternationalParcelComponent implements OnInit {

  constructor(private pacService: PACService) { }

  ngOnInit() {
    this.pacService.getCountries()
      .then(countries => {
        console.log(countries);
      });
  }

}
