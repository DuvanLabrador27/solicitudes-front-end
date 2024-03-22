import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeesService } from '@modules/employees/services/employees.service';
import { IEmployee } from '@data/interfaces/employee.interface';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  newEmployee: IEmployee = {
    dsDocument: '',
    dsDocumentType: '',
    dsName: '',
    dsLastname: '',
    dsPhoneNumber: '',
    dsAddress: '',
    feHireDate: '',
    feDepartureDate: '',
    dsTypeOfContract: '',
    dsEmployeeStatus: ''
  };

  constructor(
    private employeesService: EmployeesService,
    private router: Router
  ) { }

  addEmployee(): void {
    this.employeesService
    .addEmployee(this.newEmployee)
      .subscribe((response: IEmployee) => {
        console.log('Created Employee:', response);
        this.router.navigate(['/employees/list']);
      });
  }
  
}
