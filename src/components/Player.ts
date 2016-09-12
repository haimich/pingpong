import { Component, Input } from '@angular/core';

@Component({
  selector: 'player',
  template: `
    <input [(ngModel)]="name" placeholder="name">
    <button (click)="onSelect(name)">ClickMe</button>
  `,
  styles: [`
    input {
      width: 9em;
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
