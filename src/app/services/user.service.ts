import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from  'rxjs/Rx';

import { IUser } from '../users/user';

@Injectable()
export class UserService {
    private _userUrl = '/server/mock/api/users.json';
    
    constructor(private _http: Http) { }
    
    getUsers() : Observable<IUser[]> {
        return this._http.get(this._userUrl)
            .map((response: Response) => <IUser[]>response.json())
            .do(data => console.log('Users: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    getUser(id: number): Observable<IUser> {
        return this.getUsers()
            .map((users: IUser[]) => users.filter(u => u.id === id).pop())
     }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
