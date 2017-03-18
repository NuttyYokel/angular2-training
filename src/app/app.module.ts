import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from "./components/list.component";
import { DetailComponent } from "./components/detail.component";
import { LikeComponent } from "./components/like.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
                    AppComponent,
                    ListComponent,
                    DetailComponent,
                    LikeComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }