import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultRoutingModule } from './search-result-page-routing.module';
import { SearchResultComponent } from './search-result-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { ButtonContainerComponent } from './button-container/button-container.component';
import { SummaryComponent } from './summary/summary.component';
import { CopilotResultsComponent } from './copilot-results/copilot-results.component';
import { SearchResultsComponent } from './search-results/search-results.component';


@NgModule({
  declarations: [
    SearchResultComponent,
    NavbarComponent,
    SearchComponent,
    ResultsComponent,
    ButtonContainerComponent,
    SummaryComponent,
    CopilotResultsComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    SearchResultRoutingModule
  ]
})
export class SearchResultModule { }
