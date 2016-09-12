import { Component, Input } from '@angular/core';

@Component({
  selector: 'pingpong-table',
  template: `
    <div class="row">
      <div class="six columns pingpong-side">left</div>
      <div class="six columns pingpong-side">right</div>
    </div>
  `,
  styles: [`
    .pingpong-side {
      background-color: #0f72b5;
      height: 24em;
    }
  `]
})
export default class Player {
  @Input()
  name: string;

  constructor() {
    this.name = 'Finn';
  }

  onSelect(name: string) {
    console.log('Selected', name);
  }
}
