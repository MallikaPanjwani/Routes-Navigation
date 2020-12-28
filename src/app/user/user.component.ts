import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  userDetailById: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService
  ) {}

  ngOnInit() {
    let id = this._activatedRoute.snapshot.params["id"];
    this._userService.getUser(id).subscribe(user => {
      this.userDetailById = user;
    });
  }
}
