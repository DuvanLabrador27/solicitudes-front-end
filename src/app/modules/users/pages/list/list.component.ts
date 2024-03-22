import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IUsers } from '@data/interfaces/users';
import {UsersService } from '@modules/users/services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['nmIdUser', 'dsEmail', 'dsUserStatus','actions', 'created'];
  dataSources: IUsers[] = [];

  constructor(
    private usersService: UsersService,
    private router: Router,
    
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }

  private getAllUsers() {
    this.usersService.getAllUsers()
      .subscribe((users: IUsers[]) => {
        this.dataSources = users;
      });
  }

  public redirectToRequestVacation = (id: number) => {
    this.router.navigate(['/request-vacation/list/', id]);
  }
  public redirectToCreateRequestVacation = (idUser: number) => {
    this.router.navigate(['/request-vacation/add/', idUser]);
  }
  
}
