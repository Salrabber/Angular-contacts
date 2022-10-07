import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { usersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  users: User[] 
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
