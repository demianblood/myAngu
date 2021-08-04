import {Routes} from "@angular/router";
import {UsersComponent} from "../users/users.component";
import {UserResolveService} from "../../services/user-resolve.service";
export let routes: Routes =
  [
    {
      path:'users',component:UsersComponent,resolve:{xxx:UserResolveService}
    }
  ]
