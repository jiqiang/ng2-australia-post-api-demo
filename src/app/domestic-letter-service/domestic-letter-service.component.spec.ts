import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticLetterServiceComponent } from './domestic-letter-service.component';

describe('DomesticLetterServiceComponent', () => {
  let component: DomesticLetterServiceComponent;
  let fixture: ComponentFixture<DomesticLetterServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticLetterServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticLetterServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
