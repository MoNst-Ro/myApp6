import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container mt-3">
  <app-card title="Form">
    <input type="text">
    <input type="text">
    <input type="text">
  </app-card>

  <app-card title="Profile">
    Lorem ipsum
  </app-card>

  <app-card title="Identity">
    <div class="row">
      <div class="col">
        <app-card title="Name">
          <input type="text">
        </app-card>
      </div>
      <div class="col">
        <app-card title="Surname">
          <input type="text">
        </app-card>
      </div>
    </div>
    <div class="row">
    <div class="col">
        <app-card title="Age">
          <input type="text">
        </app-card>
      </div>
      <div class="col">
        <app-card title="City">
          <input type="text">
        </app-card>
      </div>
    </div>
  </app-card>
  </div>

  <app-card>
    
  </app-card>
  `,
  styles: []
})
export class AppComponent {
  title = 'myApp6';
}
