import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService) {}

  canActivate() {
    if (this._authService.IsUserLoggedIn()) {
      return true;
    } else return false;
  }
}
