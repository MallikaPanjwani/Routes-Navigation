import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "./user.service";
import { UserComponent } from "./user/user.component";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";
import { AddUserComponent } from "./add-user/add-user.component";
import { UserChangesGuard } from "./user-changes.guard";

const routes: Routes = [
  { path: " ", redirectTo: "home" },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "home/:id", component: UserComponent },
  {
    path: "addUser",
    component: AddUserComponent,
    canDeactivate: [UserChangesGuard]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    UserComponent,
    AddUserComponent
  ],
  bootstrap: [AppComponent],
  providers: [UserService, AuthService, AuthGuard, UserChangesGuard]
})
export class AppModule {}
