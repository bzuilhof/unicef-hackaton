import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageViewComponent } from './stage-view.component';

describe('StageViewComponent', () => {
  let component: StageViewComponent;
  let fixture: ComponentFixture<StageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
