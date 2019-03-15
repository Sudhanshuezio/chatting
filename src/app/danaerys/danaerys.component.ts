import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-danaerys',
  templateUrl: './danaerys.component.html',
  styleUrls: ['./danaerys.component.css']
})
export class DanaerysComponent implements OnInit {

  msgs = new Array<string>();

  constructor(private chat : ChatService) { }

  ngOnInit() {
  }

  send(msg) : void
  {
    msg = "Danaerys: " + msg;
    this.msgs = this.chat.chat(msg);
  }

}
