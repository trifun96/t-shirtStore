import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterInformationComponent } from './footer-information.component';

describe('FooterInformationComponent', () => {
  let component: FooterInformationComponent;
  let fixture: ComponentFixture<FooterInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterInformationComponent]
    });
    fixture = TestBed.createComponent(FooterInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
