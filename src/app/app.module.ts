import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routes} from "./components/routes/basic.routes";
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
// import { TdFormComponent } from './components/td-form/td-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UsersComponent } from './components/users/users.component';
// import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    // TdFormComponent,
    // ReactiveFormComponent,

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
