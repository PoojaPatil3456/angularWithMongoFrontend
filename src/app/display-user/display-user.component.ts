import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  allEmployees:Array<any>=[];
  constructor(private emp:EmployeeService) { }

  ngOnInit(): void {
    this.emp.getEmployees().subscribe(data =>{
      this.allEmployees=data})
  }
}
