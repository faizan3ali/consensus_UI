import { Component } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  results = [
    { title: 'Result 1', summary: 'This is the summary of result 1.' },
    { title: 'Result 2', summary: 'This is the summary of result 2.' },
    { title: 'Result 3', summary: 'This is the summary of result 3.' }
  ];

  constructor() {}
}
