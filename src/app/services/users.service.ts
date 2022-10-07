import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from '@angular/common/http'
import { delay, Observable } from "rxjs";
import { User } from "../models/user";

@Injectable({
    providedIn: 'root'
})

export class usersService{
    constructor(private http: HttpClient){
    }

    getAll(): Observable<User[]>{
        return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users', {
            params: new HttpParams({
                fromObject: {limit: 5}
            })
        })
    }
}   