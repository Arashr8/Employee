import {Component, OnInit} from '@angular/core';
import {IEmployeeDetail} from "../../model/employee.model";
import {EmployeeService} from "../../service/employee.service";
import {ActivatedRoute} from "@angular/router";
import * as moment from 'moment'

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  loading: boolean = false
  employee: IEmployeeDetail | undefined

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loading = true;
    // @ts-ignore
    const id = this.route.snapshot.params.id;
    this.employeeService.getEmployeeById(id).subscribe({
      next: value => this.employee = value,
      error: err => alert(err.message),
      complete: () => this.loading = false
    })
  }

  getEmployeeProperty(property: keyof IEmployeeDetail) {
    return this.employee?.[property] || ""
  }

  getEmployeeBirthday() {
    return moment(this.employee?.dateOfBirth).format("DD MMM YYYY")
  }

  getEmployeeAddress(key :keyof IEmployeeDetail["location"]) {
    return this.employee?.location[key]||"";
  }
}
