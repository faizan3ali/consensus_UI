import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopilotResultsComponent } from './copilot-results.component';

describe('CopilotResultsComponent', () => {
  let component: CopilotResultsComponent;
  let fixture: ComponentFixture<CopilotResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopilotResultsComponent]
    });
    fixture = TestBed.createComponent(CopilotResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
