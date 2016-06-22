import { Component, OnInit} from '@angular/core';
import {AutoCompleteDirective} from "ng2-auto-complete/dist";
import { UserService } from '../services/user.service';
import { IUser } from './user';

@Component({
  selector: 'user-list-comp',
  templateUrl: 'app/users/user.list.component.html',
  //styleUrls: ['app.component.css']
  directives: [AutoCompleteDirective],
})

export class UserListComponent implements OnInit {
    users : IUser[];
    errorMessage : string;

    constructor( private userService: UserService ) {
        this.users = new Array();
    }
      ngOnInit() {  
        console.log('users');
        setTimeout(function() {
            let componentHandler = window['componentHandler'] || '';
            if (!componentHandler) {
                console.error('MDL is missing.');
                return;
            }
            componentHandler.upgradeAllRegistered();
            console.log('Injected MDL on DOM');
        }, 100);
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
