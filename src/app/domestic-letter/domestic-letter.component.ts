import { Component, OnInit } from '@angular/core';

import { PACService } from '../pac/pac.service';

@Component({
  selector: 'domestic-letter',
  templateUrl: './domestic-letter.component.html',
  styleUrls: ['./domestic-letter.component.scss']
})
export class DomesticLetterComponent implements OnInit {

  thicknesses: any[];
  weights: any[];
  sizes: any[];
  services: any[];
  postage: any;

  thickness: string;
  weight: string;
  length: string;
  width: string;

  constructor(private pacService: PACService) {}

  getDomesticLetterThicknesses(): void {
    this.pacService.getDomesticLetterThicknesses()
      .then(thicknesses => this.thicknesses = thicknesses);
  }

  getDomesticLetterWeights(): void {
    this.pacService.getDomesticLetterWeights()
      .then(weights => this.weights = weights);
  }

  getDomesticLetterSizes(): void {
    this.pacService.getDomesticLetterSizes()
      .then(sizes => this.sizes = sizes.filter(s => s.value));
  }

  getDomesticLetterServices(length: number, width: number, thickness: number, weight: number): void {
    this.pacService.getDomesticLetterServices(length, width, thickness, weight)
      .then(services => this.services = services);
  }

  calculateDomesticLetterPostage(serviceCode: any, weight: any, optionCode?: any, suboptionCode?: any, extraCover?: any): void {
    this.pacService.calculateDomesticLetterPostage(serviceCode, weight)
      .then(postage => this.postage = postage);
  }

  ngOnInit() {
    // get initial data
    this.getDomesticLetterThicknesses();
    this.getDomesticLetterWeights();
    this.getDomesticLetterSizes();
  }

  sizeChange(e) {
    this.setLengthAndWidthBySize(e.target.value);
  }

  private setLengthAndWidthBySize(size: string): void {
    // get size value and set length and width
    let sizeArray = size.split("x");
    this.length = sizeArray[0];
    this.width = sizeArray[1];
  }

}
