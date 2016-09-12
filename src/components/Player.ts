import { Component, Input } from '@angular/core';

@Component({
  selector: 'Player',
  template: `
    <input [(ngModel)]="name" placeholder="name">
    <button (click)="onSelect()">ClickMe</button>
  `,
  styles: [`
    .crown {
      background-color: yellow;
    }
  `]
})
export default class Player {
  @Input()
  name: string;

  constructor() {
    this.name = 'Finn';
  }

  onSelect() {
    console.log('Selected', arguments);
  }
}
