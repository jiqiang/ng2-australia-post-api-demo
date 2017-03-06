import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalLetterComponent } from './international-letter.component';

describe('InternationalLetterComponent', () => {
  let component: InternationalLetterComponent;
  let fixture: ComponentFixture<InternationalLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
