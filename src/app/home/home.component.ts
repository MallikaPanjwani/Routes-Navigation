import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { UserService } from "../user.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  users: any;
  canActivateFlag: boolean;
  constructor(
    private _userService: UserService,
    private _authoService: AuthService,
    private _router: Router
  ) {}
  ngOnInit() {
    this._userService.getAllUsers().subscribe(data => {
      this.users = data;
    });
    if (this._authoService.IsUserLoggedIn()) {
      this.canActivateFlag = true;
    } else {
      this.canActivateFlag = false;
    }
  }

  addUSer() {
    this._router.navigateByUrl("/addUser");
  }
}
