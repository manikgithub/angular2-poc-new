import { Component, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from './user';

@Component({
    selector: 'user-detail-comp',
    templateUrl : `app/users/user.detail.component.html`

})
export class UserDetailComponent implements OnInit {
    user : IUser;
    errorMessage : string;

    constructor(private _userService: UserService) {

    }

    ngOnInit() {
        if (!this.user)
            this.getUser(1);
    }

    getUser(id: number) {
        this._userService.getUser(id)
            .subscribe(
                user => this.user = user,
                error => this.errorMessage = <any>error
            );
    }

}