import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pingpong-table',
  template: `
    <div class="row">
      <div class="six columns pingpong-side">
        <input type="number" class="pingpong-counter"
          [style.background-color]="getBgStyle()"
          [(ngModel)]="pointsPlayer1"
          (change)="onChange()"
        />
      </div>
      <div class="six columns pingpong-side">
        <input type="number" class="pingpong-counter"
          [style.background-color]="getBgStyle()"
          [(ngModel)]="pointsPlayer2"
          (change)="onChange()"
        />
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
export default class Table {
  pointsPlayer1: number = 0;
  pointsPlayer2: number = 0;

  @Output()
  gameFinished = new EventEmitter();

  onChange(event: any) {
    if (this.gameWon()) {
      this.gameFinished.emit(this.getWinner());
    }
  }

  gameWon() {
    if (this.pointsValid() && this.getMax() >= 3) {
      return true;
    } else {
      return false;
    }
  }

  getDifference() {
    return Math.abs(this.pointsPlayer1 - this.pointsPlayer2);
  }

  getMax() {
    return Math.max(this.pointsPlayer1, this.pointsPlayer2);
  }

  getWinner() {
    if (this.pointsPlayer1 > this.pointsPlayer2) {
      return 1;
    } else {
      return 2;
    }
  }

  pointsValid() {
    if (this.getDifference() <= 1) {
      return false;
    } else {
      return true;
    }
  }

  getBgStyle() {
    if (this.pointsValid()) {
      return 'green';
    } else {
      return 'yellow';
    }
  }
}
