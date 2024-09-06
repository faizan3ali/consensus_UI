import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-container',
  templateUrl: './button-container.component.html',
  styleUrls: ['./button-container.component.scss']
})
export class ButtonContainerComponent {
  @Output() summaryToggle = new EventEmitter<boolean>();
  @Output() copilotToggle = new EventEmitter<boolean>();

  toggleSummary(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.summaryToggle.emit(isChecked); // Emit true if checked, false if unchecked
  }

  toggleCopilot(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.copilotToggle.emit(isChecked); // Emit true if checked, false if unchecked
  }
}
