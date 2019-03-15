import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JohnComponent } from './john/john.component';
import { DanaerysComponent } from './danaerys/danaerys.component';
import { ChatService } from './chat.service';
import { AryaComponent } from './arya/arya.component';

@NgModule({
  declarations: [
    AppComponent,
    JohnComponent,
    DanaerysComponent,
    AryaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
