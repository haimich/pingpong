import { Component, Input } from '@angular/core';

@Component({
  selector: 'player',
  template: `
    <img src="images/avatar.png" />
    <input [(ngModel)]="name" placeholder="name">
  `,
  styles: [`
    input {
      width: 9em;
    }

    img {
      width: 105%;
    }
  `]
})
export default class Player {
  @Input()
  name: string;

  constructor() {
    this.name = 'Finn';
  }
}
