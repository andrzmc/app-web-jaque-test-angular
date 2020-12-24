import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableFiltersComponent } from './data-table-filters.component';

describe('DataTableFiltersComponent', () => {
  let component: DataTableFiltersComponent;
  let fixture: ComponentFixture<DataTableFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
