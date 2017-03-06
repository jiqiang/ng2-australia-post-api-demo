import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalParcelComponent } from './international-parcel.component';

describe('InternationalParcelComponent', () => {
  let component: InternationalParcelComponent;
  let fixture: ComponentFixture<InternationalParcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalParcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalParcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
