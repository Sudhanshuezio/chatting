import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-arya',
  templateUrl: './arya.component.html',
  styleUrls: ['./arya.component.css']
})
export class AryaComponent implements OnInit {
  msgs = new Array<string>();

  constructor(private chat : ChatService) { }

  ngOnInit() {
  }

  send(msg) : void
  {
    msg = "Arya: " + msg;
    this.msgs = this.chat.chat(msg);
  }


}
