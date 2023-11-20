import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPageComponent } from './banner-page.component';

describe('BannerPageComponent', () => {
  let component: BannerPageComponent;
  let fixture: ComponentFixture<BannerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerPageComponent]
    });
    fixture = TestBed.createComponent(BannerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
