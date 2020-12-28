import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { AddUserComponent } from "./add-user/add-user.component";

@Injectable()
export class UserChangesGuard implements CanDeactivate<AddUserComponent> {
  canDeactivate(addUsercomponent: AddUserComponent) {
    console.log(addUsercomponent.username.dirty);
    if (addUsercomponent.username.dirty) {
      return window.confirm(
        "You have some unsaved changes. Are you sure you want to navigate?"
      );
    }
    return true;
  }
}
