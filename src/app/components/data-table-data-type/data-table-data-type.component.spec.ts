import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableDataTypeComponent } from './data-table-data-type.component';

describe('DataTableDataTypeComponent', () => {
  let component: DataTableDataTypeComponent;
  let fixture: ComponentFixture<DataTableDataTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableDataTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableDataTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
