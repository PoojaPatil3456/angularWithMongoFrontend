import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data:any
  constructor(private emp:EmployeeService) { }

  ngOnInit(): void {
  }
  login(register:any){
    console.log(register.value);
    this.emp.validateUser(register.value).subscribe(data =>{
      this.data=data
    })
    console.log(this.data)
}
}
