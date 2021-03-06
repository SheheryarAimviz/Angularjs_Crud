import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService : EmployeeService) { }

  objects = {
    name:"Sheheryar"
  };
  employeeList = [];
  ngOnInit() {
    this.employeeService.getEmployeeList();

    this.employeeList = this.employeeService.employeeList;

    console.log(this.employeeList[0].title);
    console.log(this.objects.name);
  }

}
