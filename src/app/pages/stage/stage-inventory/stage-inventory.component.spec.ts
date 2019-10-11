import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageInventoryComponent } from './stage-inventory.component';

describe('StageInventoryComponent', () => {
  let component: StageInventoryComponent;
  let fixture: ComponentFixture<StageInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
