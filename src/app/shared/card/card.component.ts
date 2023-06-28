import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card mb-3">
      <div class="card-header" (click)="opened = !opened">
        {{title}}
      </div>
      <div class="card-body" *ngIf="opened">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class CardComponent {
  @Input() title: string = 'untitled';
  opened = false;

}
