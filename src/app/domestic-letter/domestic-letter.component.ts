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
  options: any[];
  suboptions: any[];
  postage: any;

  thickness: string;
  weight: string;
  length: string;
  width: string;
  service: any;
  option: any;
  suboption: any;
  serviceCode: string;
  optionCode: string;
  suboptionCode: string;

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

  getDomesticLetterServices(length: string, width: string, thickness: string, weight: string): void {
    if (length && width && thickness && weight) {
      this.pacService.getDomesticLetterServices(this.length, this.width, this.thickness, this.weight)
        .then(services => this.services = services);
    }
  }

  calculateDomesticLetterPostage(): void {
    this.pacService.calculateDomesticLetterPostage(this.serviceCode, this.weight)
      .then(postage => this.postage = postage);
  }

  ngOnInit() {
    // get initial data
    this.getDomesticLetterThicknesses();
    this.getDomesticLetterWeights();
    this.getDomesticLetterSizes();
  }

  thicknessChange(e) {
    this.thickness = e.target.value;
    this.resetServices();
    this.getDomesticLetterServices(this.length, this.width, this.thickness, this.weight);
  }

  weightChange(e) {
    this.weight = e.target.value;
    this.resetServices();
    this.getDomesticLetterServices(this.length, this.width, this.thickness, this.weight);
  }

  sizeChange(e) {
    this.setLengthAndWidthBySize(e.target.value);
    this.resetServices();
    this.getDomesticLetterServices(this.length, this.width, this.thickness, this.weight);
  }

  resetServices() {
    this.services = null;
    this.options = null;
    this.suboptions = null;
  }

  resetOptions() {
    this.options = null;
    this.suboptions = null;
  }

  resetSuboptions() {
    this.suboptions = null;
  }

  serviceChange(e) {
    this.resetOptions();
    this.service = this.services[e.target.value];
    this.serviceCode = this.service.code;
    this.options = this.service.options && this.service.options.option ? this.service.options.option : undefined;
  }

  optionChange(e) {
    this.resetSuboptions();
    this.option = this.options[e.target.value];
    this.optionCode = this.option.code;
    this.suboptions = this.option.suboptions && this.option.suboptions.option ? this.option.suboptions.option : undefined;
  }

  suboptionChange(e) {
    this.suboption = this.suboptions[e.target.value];
    this.suboptionCode = this.suboption.code;
  }

  private setLengthAndWidthBySize(size: string): void {
    // get size value and set length and width
    let sizeArray = size.split("x");
    this.length = sizeArray[0];
    this.width = sizeArray[1];
  }

}
