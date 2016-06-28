import { Component } from '@angular/core';
import { UserListComponent } from '../users/user.list.component';

@Component({
    templateUrl : `app/home/home.component.html`,
    directives: [UserListComponent],
})
export class HomeComponent {
    public pageTitle: string = 'Home';

    ngOnInit() {
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