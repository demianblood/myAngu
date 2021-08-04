import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {UserService} from "./user.service";
import {IUsers} from "../models/IUsers";

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<IUsers> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.userService.getUsers();
  }
}
