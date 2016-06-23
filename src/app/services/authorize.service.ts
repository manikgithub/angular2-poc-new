import { Injectable } from '@angular/core';


@Injectable() 
export class AuthService {
    private _visible : boolean = false;

    isVisible(componentName: string, loggedUser: string) : boolean {

        return (componentName == loggedUser);
        //return this._visible;
    }


}