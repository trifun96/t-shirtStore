import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryInformationComponent } from './delivery-information.component';

describe('DeliveryInformationComponent', () => {
  let component: DeliveryInformationComponent;
  let fixture: ComponentFixture<DeliveryInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryInformationComponent]
    });
    fixture = TestBed.createComponent(DeliveryInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
