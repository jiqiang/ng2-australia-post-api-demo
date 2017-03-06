import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticParcelComponent } from './domestic-parcel.component';

describe('DomesticParcelComponent', () => {
  let component: DomesticParcelComponent;
  let fixture: ComponentFixture<DomesticParcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticParcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticParcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
