import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IRequestVacation } from '@data/interfaces/request-vacation';
import { RequestVacationService } from '@modules/request-vacation/services/request-vacation.service';

@Component({
  selector: 'app-list-request-vacation',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private idUser: number = 0;
  displayedColumns: string[] = ['nmIdRequest', 'nameRequest', 'description', 'nmNumberOfDaysRequested', 'actions'];
  dataSources: IRequestVacation[] = [];

  constructor(
    private requestvacation: RequestVacationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.idUser = +this.route.snapshot.params['idUser'];
    this.getAllRequest(this.idUser);
  }

  private getAllRequest(idUser: number) {
    this.requestvacation.getAllRequestVacation(idUser)
      .subscribe((request: IRequestVacation[]) => {
        this.dataSources = request;
      });
  }

  public redirectToRequestVacation = (idRequest: number) => {
    this.router.navigate(['/request-vacation/detail/', idRequest, this.idUser]);
  }

}
