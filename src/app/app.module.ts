import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routes} from "./components/routes/basic.routes";
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    PostComponent,
    PostsComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
