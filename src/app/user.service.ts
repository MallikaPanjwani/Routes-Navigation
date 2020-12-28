import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  constructor(private _httpClient: HttpClient) {}

  getAllUsers() {
    return this._httpClient.get("https://jsonplaceholder.typicode.com/users");
  }

  getUser(id: number) {
    return this._httpClient.get(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
  }
}
