import { Component } from '@angular/core';
import { Post } from './post';
import { NgForm} from '@angular/forms';
import {ngModel} from '@angular/';

@Component({
  selector: 'app-root',
  template:`
  <div class="container">
  <h1>Add Post</h1>
  <form>
  <div class="form-group">
  <label>Title</label>
  <input type = "text" class="form-control" [(ngModel)]="model.title" required>
  </div>
  <div class="form-group">
  <label>Category</label>
  <select class ="form-control" [(ngModel)]="model.category" required>
  <option *ngFor="let category of categories" >{{category}}</option>
  </select>
  </div>
  <div class ="form-group">
  <label>Body</label>
  <textarea class="form-control" [(ngModel)]="model.body"></textarea>
  </div>
  <div class="form-group">
  <label>Author</label>
  <input type="text" class="form-control"[(ngModel)]="model.author">
  </div>
  <button type="submit" class ="btn btn-default">Submit</button>
  </form>
  </div>

  `
})
export class AppComponent {
categories = ['Technology ','Business','Entertainment'];
model = new Post(1,'post one','this.categories[0]','this is first post','Brad');
submitted = false;
}
