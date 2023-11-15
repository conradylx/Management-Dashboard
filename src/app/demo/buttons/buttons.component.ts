import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <button mat-button><mat-icon>face</mat-icon>Click me!</button>
    <section>
      <mat-checkbox>Check me!</mat-checkbox>
      <mat-checkbox [disabled]="true">Disabled</mat-checkbox>
    </section>
  `,
  styles: ``,
})
export class ButtonsComponent {}
