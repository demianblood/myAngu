import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUsers} from "../../../models/IUsers";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "https://jsonplaceholder.typicode.com/users"

  constructor(private httpClient: HttpClient) {

  }

getAllUsers():Observable<IUsers[]>{
    return this.httpClient.get<IUsers[]>(this.url)
}
getUserById(id:number):Observable<IUsers>{
    return this.httpClient.get<IUsers>(this.url + '/'+id)
}

}
