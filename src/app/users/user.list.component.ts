import { Component, OnInit} from '@angular/core';
//import { UserService } from '../services/user.service';
//import { IUser } from './user';

@Component({
  selector: 'user-list-comp',
  template: '<h1>Welcome </h1>'
  //styleUrls: ['app.component.css']
})

export class UserListComponent implements OnInit {
   // users : IUser[];
    errorMessage : string;

    constructor(/* private userService: UserService */) {
        
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

        //this.userService.getUsers()
        //.subscribe(users => this.users = users,
        //error => this.errorMessage = error
        //);
        console.log()
    }

}
