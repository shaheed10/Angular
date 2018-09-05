import { Component, OnInit } from '@angular/core';
import { GetService } from '../get.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  providers:[GetService],
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  private getter;

  constructor(private getservice:GetService) { }

  ngOnInit() {
    this.getservice.getMovies().subscribe(movies=>this.getter=movies)
  }

}
