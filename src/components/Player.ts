import { Component, Input } from '@angular/core';

@Component({
  selector: 'player',
  template: `
    <img src="images/avatar.png" />
    <input [(ngModel)]="name" [(placeholder)]="placeholder">
  `,
  styles: [`
    input {
      width: 9em;
      padding: 5px;
    }

    img {
      width: 105%;
    }
  `]
})
export default class Player {
  name: string;

  @Input('playerNumber')
  playerNumber: number;

  constructor() {
    this.name = '';
  }

  get placeholder() {
    return 'Player ' + this.playerNumber;
  }
}
