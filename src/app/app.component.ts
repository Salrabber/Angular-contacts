import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { users as data } from './data/users';
import { usersService } from './services/users.service';
import { Observable } from 'redux';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Siologoc';
  users: User[] = []
  loading: boolean = false

  constructor(private userService: usersService){

  }

  ngOnInit(): void {
    this.loading = true
    this.userService.getAll().subscribe(users => {
      this.users = users
      console.log(users)
      this.loading = false
    })
  }
}
