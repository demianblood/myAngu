import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routes} from "./components/routes/basic.routes";
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReactiveFormComponent } from './components/users/reactive-form/reactive-form.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    UsersComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
