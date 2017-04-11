import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticLetterComponent } from './domestic-letter.component';

describe('DomesticLetterComponent', () => {
  let component: DomesticLetterComponent;
  let fixture: ComponentFixture<DomesticLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
