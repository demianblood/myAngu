import {Routes} from "@angular/router";
import {AppComponent} from "../../app.component";
import {UsersComponent} from "../users/users.component";
import {UserComponent} from "../user/user.component";
export let routes: Routes =
  [
    {
      path:'',
      component:UsersComponent,
     children:[
       {
         path:'user',
         component:UsersComponent
       }
       ,{
         path:'users/:id',
         component:UserComponent
       }
     ]
    },
  ]
