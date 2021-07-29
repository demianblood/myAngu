import {Routes} from "@angular/router";
import {UsersComponent} from "../users/users.component";
import {UserDetailsComponent} from "../user-details/user-details.component";
import {UserGuardService} from "../../services/user-guard.service";
import {PostGuardService} from "../../services/post-guard.service";
import {PostDetailsComponent} from "../post-details/post-details.component";
import {PostsComponent} from "../posts/posts.component";

export let routes: Routes =
  [
    {
      path: 'users',
      component: UsersComponent,
      canDeactivate: [UserGuardService]
    },
    {
      path: 'users/:id',
      component: UserDetailsComponent,
      canActivate: [UserGuardService],
      canDeactivate: [UserGuardService]
    },
    {
      path: 'users',
      redirectTo: '',
      pathMatch: 'full'
    },
    {
      path: 'posts',
      component: PostsComponent,
      canDeactivate: [PostGuardService]
    },
    {
      path: 'posts/:id',
      component: PostDetailsComponent,
      canActivate: [PostGuardService],
      canDeactivate: [PostGuardService]
    },
    {
      path: 'posts',
      redirectTo: '',
      pathMatch: 'full'
    }
  ]
