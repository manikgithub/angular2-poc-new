import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from '@angular/common';
import {AuthenticationService} from '../services/authentication.service';
import { Router, RouteConfig, ROUTER_PROVIDERS, CanActivate, ROUTER_DIRECTIVES  } from '@angular/router-deprecated';

@Component({
  selector: 'login',
  directives: [ FORM_DIRECTIVES, NgIf ],
  templateUrl: 'app/login/login.component.html'
})

export class LoginComponent {
  form: ControlGroup;
  error: boolean = false;
  constructor(fb: FormBuilder, public auth: AuthenticationService, public router: Router) {
    this.form = fb.group({
      username:  ['', Validators.required],
      password:  ['', Validators.required]
    });
  }

  onSubmit(value: any) {
    this.auth.login(value.username, value.password)
      .subscribe(
        (token: any) => { this.router.navigate(['../Home']); },
        () => { this.error = true; }
      );
  }
}