import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'domestic-letter-service',
  templateUrl: './domestic-letter-service.component.html',
  styleUrls: ['./domestic-letter-service.component.css']
})
export class DomesticLetterServiceComponent implements OnInit {
  
  @Input() services: any;

  selectedService: any;
  selectedOption: any;
  selectedSuboption: any;

  constructor() {
    this.services = [];
  }

  ngOnInit() {
  }

}
