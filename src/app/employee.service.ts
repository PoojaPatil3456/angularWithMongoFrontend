import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  saveURL=""
  getURL=""
  validateURL=""
  constructor(private httpClient:HttpClient) { 
    this.saveURL="http://localhost:5000/saveEmployee";
    this.getURL="http://localhost:5000/allEmployees";
    this.validateURL="http://localhost:5000/validateEmployee";
  }
  addUsers(employeeData:any){
    console.log(employeeData);
    return this.httpClient.post<any>(this.saveURL,employeeData)
  }
  getEmployees():Observable<any>
  {
    return this.httpClient.get<any>(this.getURL);
  }
  
  validateUser(employeeData:any){
    return this.httpClient.post<any>(this.validateURL,employeeData)
  }
}
