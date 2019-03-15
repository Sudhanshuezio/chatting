import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-john',
  templateUrl: './john.component.html',
  styleUrls: ['./john.component.css']
})
export class JohnComponent implements OnInit {
  msgs = new Array<string>();

  constructor(private chat : ChatService) { }

  ngOnInit() {
  }

  send(msg) : void
  {
    msg = "Jon: " + msg;
    this.msgs = this.chat.chat(msg);
  }

}
