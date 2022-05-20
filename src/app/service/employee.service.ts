import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmployeeListResponse, IEmployee, IEmployeeDetail} from "../model/employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = "https://dummyapi.io/data/v1"

  constructor(private http: HttpClient) {
  }

  getEmployees(page:number) {
    return this.http.get<EmployeeListResponse>(this.baseUrl + "/user", {
      params: {page},
      headers : {
        "app-id" : "6285fabfca43190c1239917e"
      }
    })
  }

  getEmployeeById(id: IEmployee["id"]) {
    return this.http.get<IEmployeeDetail>(this.baseUrl + "/user/" + id,{
      headers : {
        "app-id" : "6285fabfca43190c1239917e"
      }
    })
  }
}
