export class ChatService {

  chatMsgs = new Array<string>();

  constructor() { }

  chat(msg) : Array<string>
  {
    this.chatMsgs.push(msg);
    return this.chatMsgs;
  }
}
