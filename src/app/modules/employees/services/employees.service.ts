import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { IEmployee } from '@data/interfaces/employee.interface';
import { environment } from '@env/environment';

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

}