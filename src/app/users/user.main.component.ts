import { Component, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
    selector: 'user-main-comp',
    templateUrl : `user.main.component.html` 
})
export class UserMainComponent implements OnInit {
    ngOnInit() {
        console.log('user-main-comp');
        setTimeout(function() {
            let componentHandler = window['componentHandler'] || '';
            if (!componentHandler) {
                console.error('MDL is missing.');
                return;
            }
            componentHandler.upgradeAllRegistered();
            console.log('Injected MDL on DOM');
        }, 100);
    }
}