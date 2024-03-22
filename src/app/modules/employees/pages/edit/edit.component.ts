import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { IEmployee } from '@data/interfaces/employee.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  private idEmployee: number = 0;
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
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.idEmployee = +this.route.snapshot.params['idEmployee'];
  }

  update(): void {

    this.employeesService.update(this.newEmployee, this.idEmployee)
      .subscribe((response: IEmployee) => {
        console.log('Created Request Vacation:', response);
        this.router.navigate(['/employees/list']);
      });



  }

}