import { UsersService } from '@modules/users/services/users.service';
import { Component } from '@angular/core';
import { IUsers } from '@app/data/interfaces/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  idEmployee: string = '';
  newUsers: IUsers = {
    dsUsername: '',
    dsPassword: '',
    dsEmail: '',
    dsUserStatus: ''
  };

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  addUser(): void {
    this.usersService.addUser(this.newUsers, this.idEmployee)
      .subscribe((response: IUsers) => {
        console.log('User created:', response);
        this.router.navigate(['/users/list']);
      });
  }

}
