import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  domesticLetterForm: FormGroup;

  constructor(
    private pacService: PACService,
    private fb: FormBuilder
  ) {}

  createForm(): void {
    this.domesticLetterForm = this.fb.group({
      thickness: [ null, Validators.required ],
      weight: [ null, Validators.required ],
      size: [ null, Validators.required ]
    });
  }

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
      .then(sizes => this.sizes = sizes);
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

    // create domestic letter form
    this.createForm();

    this.domesticLetterForm.valueChanges.subscribe(data => {

      if (!this.domesticLetterForm.valid) {
        return;
      }

      if (data.size === "undefined") {
        return;
      }

      let sizeArray = data.size.split("x");

      this.getDomesticLetterServices(sizeArray[0], sizeArray[1], data.thickness, data.weight);

      this.calculateDomesticLetterPostage('AUS_LETTER_REGULAR_LARGE', 100);
    });
  }

}
