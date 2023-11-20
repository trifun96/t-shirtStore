import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteComponentComponent } from './favorite-component.component';

describe('FavoriteComponentComponent', () => {
  let component: FavoriteComponentComponent;
  let fixture: ComponentFixture<FavoriteComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteComponentComponent]
    });
    fixture = TestBed.createComponent(FavoriteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
