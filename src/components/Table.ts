import { Component, Input } from '@angular/core';

@Component({
  selector: 'pingpong-table',
  template: `
    <div class="row">
      <div class="six columns pingpong-side">
        <input type="number" class="pingpong-counter" value="0" />
      </div>
      <div class="six columns pingpong-side">
        <input type="number" class="pingpong-counter" value="0" />
      </div>
    </div>
  `,
  styles: [`
    .pingpong-side {
      background-color: #0f72b5;
      height: 16em;
    }

    .pingpong-counter {
      width: 17%;
      margin-left: 124px;
      margin-top: 90px;
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
