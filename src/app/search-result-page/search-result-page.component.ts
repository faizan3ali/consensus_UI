import { Component } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.scss']
})
export class SearchResultComponent {
  searchText: string = '';
  showButtons: boolean = false;
 
  showSummary = true;
  showCopilot = true;

  onSummaryToggle(isVisible: boolean) {
    this.showSummary = isVisible; // Set showSummary based on emitted event
  }

  onCopilotToggle(isVisible: boolean) {
    this.showCopilot = isVisible; // Set showCopilot based on emitted event
  }

  
}
