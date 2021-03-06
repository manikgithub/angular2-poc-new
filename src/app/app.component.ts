import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
//import { ROUTER_DIRECTIVES } from '@angular/router';
import { RouteConfig, ROUTER_PROVIDERS, CanActivate, ROUTER_DIRECTIVES  } from '@angular/router-deprecated';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from  './home/home.component';
import { UserListComponent } from './users/user.list.component';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { AppHeaderComponent } from './app.header.component';
import { AppBodyComponent } from './app.body.component';

@CanActivate((next, prev) => {
      // This must prove to be true for the component @ this route to load
      console.log('Can active in app-comp');
      return true;
    }
)

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  //styleUrls: ['app.component.css'],
  directives: [UserListComponent, ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, UserService, AuthenticationService ]
   
})

@RouteConfig ([
    { path: '/', redirectTo: ['Login'] },
    { path: '/home', name: 'Home', component: HomeComponent },
    { path: '/login', name: 'Login', component: LoginComponent}
])

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
