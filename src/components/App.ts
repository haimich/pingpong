import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div class="container">
      <h1>{{ name }}</h1>

      <div class="row">
        <div class="two columns"><player [playerNumber]="1" [winningPlayer]="winningPlayer"></player></div>
        <div class="eight columns"><pingpong-table (gameFinished)="gameFinished($event)"></pingpong-table></div>
        <div class="two columns"><player [playerNumber]="2" [winningPlayer]="winningPlayer"></player></div>
      </div>

      <p></p>

      <div class="row">
        <button class="twelve columns" (click)="onSave()">Save Game</button>
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
  winningPlayer: number;

  gameFinished(player: number) {
    this.winningPlayer = player;
  }

  onSave() {
    console.log('on save');
  }
}
