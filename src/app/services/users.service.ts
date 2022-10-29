import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from '@angular/common/http'
import { delay, Observable, tap } from "rxjs";
import { User } from "../models/user";

@Injectable({
    providedIn: 'root'
})

export class usersService{
    constructor(private http: HttpClient){
    }

    users: User[] = []

    getAll(): Observable<User[]>{
        return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
        .pipe(
            tap(users => {
                if (!this.users.length){
                    this.users = users
                }
                
            })
        )
    }

    editUser(id: any, user: User): Observable<User>{
        return this.http.put<User>(`https://jsonplaceholder.typicode.com/users/${id}`, user)
        .pipe(
            tap(user => {
                this.users[id-1] = user
                console.log(this.users)
            })
            
        )
    }

}   