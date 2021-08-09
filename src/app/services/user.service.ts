import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUsers} from "../models/IUsers";
import {urls} from "../constant/urls";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IUsers[]> {
    return this.httpClient.get<IUsers[]>(urls.users);
  }

  getUserById(id: number): Observable<IUsers> {
    return this.httpClient.get<IUsers>(`${urls.users}/${id}`)
  }
}
