import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import App from './App';
import Player from './Player';
import Table from './Table';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ App, Player, Table ],
  bootstrap: [ App ]
})
export default class AppModule { }
