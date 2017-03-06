import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PostageAssessmentCalculatorService } from 'ng2-australia-post-api';
import { DomesticLetterServiceComponent } from '../domestic-letter-service/domestic-letter-service.component';

@Component({
  selector: 'domestic-letter',
  templateUrl: './domestic-letter.component.html',
  styleUrls: ['./domestic-letter.component.css']
})
export class DomesticLetterComponent implements OnInit {

  thicknesses: any[];
  weights: any[];
  sizes: any[];
  services: any[];
  postage: any;

  domesticLetterForm: FormGroup;

  constructor(
    private pacService: PostageAssessmentCalculatorService,
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
    this.pacService.getWeights(true, true)
      .then(weights => this.weights = weights);
  }

  getDomesticLetterSizes(): void {
    this.pacService.getSizes(true, true)
      .then(sizes => this.sizes = sizes);
  }

  getDomesticLetterServices(params: any): void {
    this.pacService.getDomesticLetterServices(params)
      .then(services => this.services = services);
  }

  calculateDomesticLetterPostage(params: any): void {
    this.pacService.calculateDomesticLetterPostage(params)
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

      this.getDomesticLetterServices({
        length: sizeArray[0],
        width: sizeArray[1],
        thickness: data.thickness,
        weight: data.weight
      });

      /*
      this.calculateDomesticLetterPostage({
        service_code: 'AUS_LETTER_REGULAR_LARGE', 
        weight: '100', 
        option_code: null, 
        suboption_code: null, 
        extra_cover: null
      });
      */
    });
  }

}
