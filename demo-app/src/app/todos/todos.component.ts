import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  template:`
  <div>
  <div *ngIf="errorMsg">
  <div class="alert alert-danger">{{errorMsg}}
  </div>
  <div *ngIf="successMsg">
  <div class="alert alert-success">{{successMsg}}
  </div>
  <input type="text" class="form-control" [(ngModel)]="newTodo" (keyup.enter)="addTodo"/>
  <br />
  </div>
  <ul class="list-group">
  <li *ngFor="let todo of todos " class="list-group-item">
  <a href="#" (dbclick)="removeTodo(todo)">{{todo}}</a>
  </li>
  </ul>
  <button class="btn btn-default" (click)="resetTodos()">Reset</button>
  `,
  styleUrls: []
})
export class TodosComponent implements OnInit {
  todos;
  newTodo;
  errorMsg;
  successMsg;

  constructor() { 
    this.todos=["east","west","north","south"];
  }

  ngOnInit() {
    
    
  }
  addTodo(){
    if(!this.newTodo ||this.newTodo.length<3){
      this.successMsg='';
      this.errorMsg='enter once again';

    }else{
      this.todos.push(this.newTodo);
      this.errorMsg='';
      this.successMsg='updated';

    }
  }
  removeTodo(todo){
    this.todos.splice(this.todos.indexOf(todo),1);
  }
  resetTodos(){
    this.todos.length=0;
    this.successMsg='todos cleared';
    this.todos='';
  }

}
