import { Component, OnInit } from '@angular/core';
import { IRequestVacation } from '@app/data/interfaces/request-vacation';
import { RequestVacationService } from '@app/modules/request-vacation/services/request-vacation.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-add-request-vacation',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{
  private idUser: number = 0;
  newRequest: IRequestVacation = {
    nameRequest: '',
    description: '',
    nmNumberOfDaysRequested: 0,
    feStartDate: ''
  };

  constructor(
    private requestVacation: RequestVacationService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
  }

  ngOnInit() {
    this.idUser = +this.route.snapshot.params['idUser'];
  }

  addRequest(): void {
    
    this.requestVacation.addRequest(this.newRequest, this.idUser)
      .subscribe((response: IRequestVacation) => {
        console.log('Created Request Vacation:', response);
        this.router.navigate(['/users/list']);
      });
  }
}
