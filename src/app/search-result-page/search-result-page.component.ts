import { Component } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.scss']
})
export class SearchResultComponent {
  searchText: string = '';
  showButtons: boolean = false;

  toggleButtons: string[] = ['Toggle 1', 'Toggle 2'];
  actionButtons: string[] = ['Action 1', 'Action 2', 'Action 3'];

  toggleState = {
    enable: false,
    disable: false
  };

  onSearch() {
    if (this.searchText.trim()) {
      console.log('Searching for:', this.searchText);
      this.showButtons = true;
    }
  }

  clearSearch() {
    this.searchText = '';
    this.showButtons = false; // Hide buttons when clearing the search
  }


  toggle(state: 'enable' | 'disable') {
    // Reset both buttons to inactive
    this.toggleState.enable = false;
    this.toggleState.disable = false;

    // Set the clicked button to active
    this.toggleState[state] = true;
  }
}
