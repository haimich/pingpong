import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div class="container">
      <h1>{{ name }}</h1>

      <div class="row">
        <div class="two columns"><player></player></div>
        <div class="eight columns"><pingpong-table></pingpong-table></div>
        <div class="two columns"><player></player></div>
      </div>
    </div>
  `,
  styles: [`
    h1 {
      text-align: center;
      margin-bottom: 40px;
    }
  `]
})
export default class App {
  name: string = 'PingPong';
}
