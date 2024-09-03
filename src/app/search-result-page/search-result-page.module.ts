import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultRoutingModule } from './search-result-page-routing.module';
import { SearchResultComponent } from './search-result-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    SearchResultComponent,
    NavbarComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    SearchResultRoutingModule
  ]
})
export class SearchResultModule { }
