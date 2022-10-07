import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  id: Number = 0

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params.id
    })
  }

  ngOnInit(): void {
  }

}
