import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponentComponent } from './dropdown-component.component';

describe('DropdownComponentComponent', () => {
  let component: DropdownComponentComponent;
  let fixture: ComponentFixture<DropdownComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownComponentComponent]
    });
    fixture = TestBed.createComponent(DropdownComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
