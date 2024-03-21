import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { IEmployee } from '@data/interfaces/employee.interface';
import { EmployeesService } from '@modules/employees/services/employees.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  private idEmployee: number = 0;
  displayedColumns: string[] = ['nmIdEmployee', 'dsDocument', 'dsDocumentType', 'dsName', 'dsLastname', 'dsPhoneNumber', 'dsAddress', 'feHireDate', 'feDepartureDate', 'dsTypeOfContract', 'dsEmployeeStatus' ];
  dataSources: IEmployee[] = []; 

  constructor(
    private employeesService: EmployeesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idEmployee = +this.route.snapshot.params['id'];
    this.getById(this.idEmployee);
  }

  private getById(idEmployee: number) {
    this.employeesService.getById(idEmployee)
      .subscribe((employee: IEmployee) => {
        this.dataSources = [employee]; 
      });
  }
}
