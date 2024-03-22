import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { IEmployee } from '@data/interfaces/employee.interface';
import { environment } from '@env/environment';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private readonly url = `${environment.baseUrlEmployees}`;

  constructor(
    private http: HttpClient
  ) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`${this.url}/employeeList`).pipe(
      tap((response: IEmployee[]) => console.log(response)),
      map((response: IEmployee[]) => response)
    );
  }

  getById(nmIdEmployee:number): Observable<IEmployee> {
    return this.http.get<IEmployee>(`${this.url}/getEmployee/${nmIdEmployee}`).pipe(
      tap((response: IEmployee) => console.log(response)),
      map((response: IEmployee) => response)
    );
  }

  addEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(`${this.url}/employeeCreate`, employee).pipe(
      tap((response: IEmployee) => console.log(response)),
      catchError((error: any) => {
        console.error('Error creating employee:', error);
        throw error; 
      })
    );
  }
  
  
  update(employee: IEmployee, nmIdEmployee: number): Observable<IEmployee> {
    return this.http.put<IEmployee>(`${this.url}/employeeUpdate/${nmIdEmployee}`, employee).pipe(
      tap((response: IEmployee) => console.log(response)),
      catchError((error: any) => {
        console.error('Error updating employee:', error);
        throw error; 
      })
    );
  }
  



}
