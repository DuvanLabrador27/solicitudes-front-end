import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRequestVacation } from '@data/interfaces/request-vacation';
import { environment } from '@env/environment';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestVacationService {

  private readonly url = `${environment.baseUrlRequestVacation}`;

  constructor(
    private http: HttpClient
  ) { }

  getAllRequestVacation(nmIdUser: number): Observable<IRequestVacation[]> {
    return this.http.get<IRequestVacation[]>(`${this.url}/requestVacation/${nmIdUser}`).pipe(
      tap((response: IRequestVacation[]) => console.log(response)),
      map((response: IRequestVacation[]) => response)
    );
  }

  getRequestVacationDetail(nmIdRequest: number, nmIdUser: number): Observable<IRequestVacation[]> {
    return this.http.get<IRequestVacation[]>(`${this.url}/requestVacation/${nmIdRequest}/${nmIdUser}`).pipe(
      tap((response: IRequestVacation[]) => console.log(response)),
      map((response: IRequestVacation[]) => response)
    );
  }

  addRequest(request: IRequestVacation, nmIdUser: number): Observable<IRequestVacation> {
    return this.http.post<IRequestVacation>(`${this.url}/createRequest/${nmIdUser}`, request).pipe(
      tap((response: IRequestVacation) => console.log(response)),
      map((response: IRequestVacation) => response)
    );
  }

}
