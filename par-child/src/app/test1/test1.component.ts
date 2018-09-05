import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test1',
  template:`
  <h1>{{"Hello " + name}}</h1>
  <button (click)="fireEvent()">Send Event</button>
  `
  ,
})
export class Test1Component implements OnInit {
  @Input('parentData') public name;
  // creating an event 
@Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit("Hey hello");
  }

}
