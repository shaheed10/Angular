import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
  <h3>{{"Welcome" + name}}</h3>
  <button (click)="fireEvent()">Send Event</button>
  `,
  styles: [`
  `]
})

export class TestComponent implements OnInit {

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  myInput(value){
    console.log(value)
  }
  fireEvent(){
    this.childEvent.emit('Hey Shahid');
  }
}