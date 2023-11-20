import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManCollectionComponent } from './man-collection.component';

describe('ManCollectionComponent', () => {
  let component: ManCollectionComponent;
  let fixture: ComponentFixture<ManCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManCollectionComponent]
    });
    fixture = TestBed.createComponent(ManCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
