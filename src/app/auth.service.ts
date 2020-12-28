import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  constructor() {}
  IsUserLoggedIn() {
    return true;
  }
}
