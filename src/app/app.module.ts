import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

// Views
import { UsersViewComponent } from './views/users-view/users-view.component';

// Components
import { MenuComponent } from './components/menu/menu.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DataTableComponent } from './components/data-table/data-table.component';

// Libraries
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UsersFilterComponent } from './components/users-filter/users-filter.component';
import { DataTableDataTypeComponent } from './components/data-table-data-type/data-table-data-type.component';
import { DataTableFiltersComponent } from './components/data-table-filters/data-table-filters.component';
import { SelectDropDownModule } from 'ngx-select-dropdown'

@NgModule({
  declarations: [
    AppComponent,
    UsersViewComponent,
    MenuComponent,
    SideNavComponent,
    DataTableComponent,
    UsersFilterComponent,
    DataTableDataTypeComponent,
    DataTableFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    HttpClientModule,
    SelectDropDownModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
