import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './shared/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService : EmployeeService) { }
  myObject = {
    gender: 'male',
    age: 33,
    location: 'USA'
  };
  employeeList = [];
  ngOnInit() {

    this.employeeService.getEmployeeList();

    this.employeeList = this.employeeService.employeeList;

    console.log(this.employeeList[0].title);
    console.log(this.myObject.age);
  }

}
