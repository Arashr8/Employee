import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../service/employee.service";
import {EmployeeListResponse, IEmployee} from "../../model/employee.model";
import {PageEvent} from "@angular/material/paginator";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: IEmployee[];
  paginationMetaData: EmployeeListResponse | undefined;
  pageEvent: PageEvent | undefined;
  currentPage = new BehaviorSubject<number>(1)

  constructor(private employeeService: EmployeeService) {
    this.employees = []
  }

  ngOnInit(): void {
    this.currentPage.subscribe(page => {
      this.employeeService.getEmployees(page).subscribe({
        next: value => {
          this.paginationMetaData = value;
          return this.employees = value.data;
        },
        error: err => alert(err.message)
      })
    })
  }

  handleChangePage($event: PageEvent) {
    this.currentPage.next($event.pageIndex + 1)
  }
}
