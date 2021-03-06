import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService : EmployeeService, private toastr : ToastrService) { }

  ngOnInit() {
  }

  resetForm(form : NgForm)
  {
    // if(form != null)
    form.reset();
    this.employeeService.selectedEmployee = {
      EmployeeID : null,
      FirstName : '',
      LastName : '',
      EmpCode : '',
      Position : '',
      Office : ''
    }
  }

  onSubmit(form : NgForm)
  {
    this.employeeService.postEmployee(form.value)
    .subscribe( data =>{
      this.resetForm(form);
      this.toastr.success('New Record Added Successfully','Employee Register');
    })
  }
}
