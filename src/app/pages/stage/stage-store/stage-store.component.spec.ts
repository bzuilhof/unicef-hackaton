import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageStoreComponent } from './stage-store.component';

describe('StageStoreComponent', () => {
  let component: StageStoreComponent;
  let fixture: ComponentFixture<StageStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
