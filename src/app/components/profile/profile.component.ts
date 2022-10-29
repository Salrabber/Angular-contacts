import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router'
import { Field, Profile } from 'src/app/models/profile';
import { User } from 'src/app/models/user';
import { usersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  id = 0

  info: User

  fields: Field[]

  edit = false

  on = () => { this.edit = true}

  

  form = new FormGroup({
    "Name": new FormControl<string>('',[Validators.required]),
    "City": new FormControl<string>('',[Validators.required]),
    "Company": new FormControl<string>('',[Validators.required])
    // "Username": new FormControl<string>('',[Validators.required]),
    // "Email": new FormControl<string>('',[Validators.required]),
    // "Street": new FormControl<string>('',[Validators.required]),
    // "city": new FormControl<string>('',[Validators.required]),
    // "Zipcode": new FormControl<string>('',[Validators.required]),
    // "Phone": new FormControl<string>('',[Validators.required]),
    // "Website": new FormControl<string>('',[Validators.required]),    
  })

  get error() {
    return ({
      "Name": this.form.controls.Name as FormControl,
      "City": this.form.controls.City as FormControl,
      "Company": this.form.controls.Company as FormControl,
    })
  }



  
  
  constructor(private route: ActivatedRoute,public userService: usersService) {
    this.route.params.subscribe(params => {
      this.id = params.id - 1
      
    })

  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(users => {
      this.info = users[this.id]

    })
  }

  pipeUser(){
    
  }

  sendUser() {
    this.userService.editUser(this.id+1,{
      name: this.form.value.Name as string,
      address: {city: this.form.value.City as string},
      company: {name: this.form.value.Company as string}

      
    }).subscribe(() => console.log('done'))
    console.log(this.form.value)
    console.log(this.error)
    console.log(this.info)
    this.edit = false
  }

}
