import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent{
  constructor(private emp:EmployeeService) { }
  submit(register:any){
    console.log(register.value);
    alert("data added")
    this.emp.addUsers(register.value).subscribe(data =>{
    localStorage.setItem('token',data)
  })
  }
}
