import { Component } from '@angular/core';
import Player from './Player';

@Component({
  selector: 'app',
  template: `
    <div class="container">
      <h1>{{ name }}</h1>

      <div class="row">
        <div class="two columns"><Player></Player></div>
        <div class="eight columns">The table</div>
        <div class="two columns">...</div>
      </div>
    </div>
  `,
  styles: [`
    h1 {
      text-align: center;
    }
  `]
})
export default class App {
  name: string = 'PingPong';
}
