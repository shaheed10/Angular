import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  template:`
  // <h2>Employe List</h2>
  // <ul *ngFor="let employee of employees">
  // <li>{{employee.name}}</li>
  // </ul>
  `,
  styleUrls: []
})
export class EmployeeListComponent implements OnInit {
  public employees=[];


  constructor(private _employeeService:EmployeeServiceService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(data=>this.employees=data);
  }

}
