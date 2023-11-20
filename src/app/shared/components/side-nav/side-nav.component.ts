import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  @Output() priceFilterChanged = new EventEmitter<any>();
  @Output() clearFilters = new EventEmitter<void>();
  @Output() closeEvent = new EventEmitter<boolean>();
  @Output() subCategoryChange = new EventEmitter<{
    checked: boolean;
    subCategory: string;
  }>();
  @Output() sizeFilterChange = new EventEmitter<{
    checked: boolean;
    size: string;
  }>();
  range: number = 0;

  onFilter(price: number) {
    this.range = price;
    this.priceFilterChanged.emit(price);
  }

  onCheckboxChange(event: any, subCategory: string) {
    const checked = event.target.checked;
    this.subCategoryChange.emit({ checked, subCategory });
  }

  onCheckboxSelectSize(event: any, size: string) {
    const checked = event.target.checked;
    this.sizeFilterChange.emit({ checked, size });
  }

  clearFilter() {
    this.clearFilters.emit();
    this.closeEvent.emit();
  }
}
