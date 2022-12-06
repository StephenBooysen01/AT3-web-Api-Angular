import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  //create an list of message 
  constructor() { }

  messages: string[] = [];

  // funcations 

  Add(message: string)
  {
    // add to message array 
    this.messages.push(message);

  }

  Clear()
  {
    this.messages = [];
  }


  
}
