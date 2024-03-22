import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { IEmployee } from '@data/interfaces/employee.interface';
import { EmployeesService } from '@modules/employees/services/employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['nmIdEmployee', 'dsDocument', 'dsDocumentType', 'dsName', 'dsLastname', 'actions', 'actionsupd'];
  dataSources: IEmployee[] = [];

  constructor(
    private employeesService: EmployeesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getEmployees();
    
  }

  private getEmployees() {
    this.employeesService.getEmployees()
      .subscribe((employees: IEmployee[]) => {
        this.dataSources = employees;
      });
  }

  
  public redirectToDeteailEmployee = (idEmployee: number) => {
    this.router.navigate(['/employees/detail/', idEmployee]);
  }
  public redirectToUpdateEmployee = (idEmployee: number) => {
    this.router.navigate(['/employees/edit/',idEmployee]);
  }
  
}
