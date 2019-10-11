import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationPopupComponent } from './situation-popup.component';

describe('SituationPopupComponent', () => {
  let component: SituationPopupComponent;
  let fixture: ComponentFixture<SituationPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SituationPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
