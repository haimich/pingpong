import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import App from './App';
import Player from './Player';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ App, Player ],
  bootstrap: [ App ]
})
export default class AppModule { }
