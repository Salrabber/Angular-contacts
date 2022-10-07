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
export class AppComponent{
  title = 'Siologoc';
  
}
