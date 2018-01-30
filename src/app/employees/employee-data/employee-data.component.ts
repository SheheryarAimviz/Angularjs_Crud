import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee-data',
  // templateUrl: './employee-data.component.html',
  template: `
  <p>{{ myObject.gender }}</p>
  `,
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent{

  constructor(private employeeService : EmployeeService) { }

    myObject = {
      gender: 'male',
      age: 33,
      location: 'USA'
    };
    employeeList = [];
    ngOnInit() {
      // this.employeeService.getEmployeeList();
      //
      // this.employeeList = this.employeeService.employeeList;
      //
      // console.log(this.employeeList[0].title);
      // console.log(this.myObject.age);
    }

}
