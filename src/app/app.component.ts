import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { HomeComponent } from  './home/home.component';
import { UserListComponent } from './users/user.list.component';
import { UserService } from './services/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  //styleUrls: ['app.component.css'],
  directives: [UserListComponent],
  providers: [HTTP_PROVIDERS, UserService]
   
})

export class AppComponent {
  title = 'Application Admin';

       
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
