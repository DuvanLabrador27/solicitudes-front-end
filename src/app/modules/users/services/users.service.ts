import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsers } from '@data/interfaces/users';
import { environment } from '@env/environment';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly url = `${environment.baseUrlUsers}`;

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(`${this.url}/usersList`).pipe(
      tap((response: IUsers[]) => console.log(response)),
      map((response: IUsers[]) => response)
    );
  }

  addUser(modelo: IUsers, employeeId: string): Observable<IUsers> {
    return this.http.post<IUsers>(`${this.url}/createUser`, modelo, { params: { employeeId } })
      .pipe(
        tap((response: IUsers) => console.log(response)),
        map((response: IUsers) => response)
      );
  }

}
