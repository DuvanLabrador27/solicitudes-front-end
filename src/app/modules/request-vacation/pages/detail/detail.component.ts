import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IRequestVacation } from '@data/interfaces/request-vacation';
import { RequestVacationService } from '@modules/request-vacation/services/request-vacation.service';

@Component({
  selector: 'app-detail-request-vacation-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  private idRequest: number = 0;
  private idUser: number = 0;

  displayedColumns: string[] = ['nmIdRequest', 'nameRequest', 'description', 'nmNumberOfDaysRequested', 'feStartDate', 'feEndDate', 'feReinstatementDate', 'dsStatus', 'feRequestCreation'];
  dataSources: IRequestVacation[] = [];

  constructor(
    private requestvacation: RequestVacationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idRequest = +this.route.snapshot.params['idRequest'];
    this.idUser = +this.route.snapshot.params['idUser'];
    this.getRequestDetail(this.idRequest, this.idUser);
  }

  private getRequestDetail(idRequest: number, idUser: number) {
    this.requestvacation.getRequestVacationDetail(idRequest, idUser)
      .subscribe((request: IRequestVacation[]) => {
        this.dataSources = request;
      });
  }

}
