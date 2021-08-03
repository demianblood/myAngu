import {Routes} from "@angular/router";
import {UsersComponent} from "../users/users.component";
import {UserDetailsComponent} from "../user-details/user-details.component";
import {PostDetailsComponent} from "../post-details/post-details.component";
import {PostsComponent} from "../posts/posts.component";


export let routes: Routes =
  [
    {
      path: 'users',
      component: UsersComponent,
    },
    {
      path: 'users/:id',
      component: UserDetailsComponent,
    },
    {
      path: 'users',
      redirectTo: '',
      pathMatch: 'full'
    },
    {
      path: 'posts',
      component: PostsComponent,
    },
    {
      path: 'posts/:id',
      component: PostDetailsComponent,

    },
    {
      path: 'posts',
      redirectTo: '',
      pathMatch: 'full'
    }
  ]
