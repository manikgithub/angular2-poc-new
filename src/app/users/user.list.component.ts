import { Component, OnInit } from '@angular/core';
import { CanActivate } from '@angular/router-deprecated';
import {AutoCompleteDirective} from "ng2-auto-complete/dist";
import { UserService } from '../services/user.service';
import { AuthService } from '../services/authorize.service';
import { IUser } from './user';


@CanActivate((next, prev) => {
      // This must prove to be true for the component @ this route to load
      console.log('Can active in user-list-comp');
      return false;
    }
)

@Component({
  selector: 'user-list-comp',
  templateUrl: 'app/users/user.list.component.html',
  //styleUrls: ['app.component.css']
  directives: [AutoCompleteDirective],
  providers: [AuthService]
})

export class UserListComponent implements OnInit {
    users : IUser[];
    errorMessage : string;
    authFlag: boolean;

    constructor( private userService: UserService, private authService: AuthService ) {
        this.users = new Array();
    }
      ngOnInit() {  
        console.log('In OnInit user-list-comp');
        setTimeout(function() {
            let componentHandler = window['componentHandler'] || '';
            if (!componentHandler) {
                console.error('MDL is missing.');
                return;
            }
            componentHandler.upgradeAllRegistered();
            console.log('Injected MDL on DOM');
        }, 100);
        this.authFlag = this.authService.isVisible('user-list-comp', 'user-list-comp1');
        console.log('authFlag: ' + this.authFlag);
        var THIS  =this;
        var list = this.userService.getUsers();
        list.subscribe(function(users1){
                THIS.users = users1["users"];
                console.log(THIS.users[0].name);
            }, this.errorMethod//error => this.errorMessage = error
        );
        

    }

    errorMethod(error: any) {
        this.errorMessage = error;
    }
    completed() {
        console.log('print users:' + this.users);
    }
}
