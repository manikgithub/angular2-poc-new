import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-body-comp',
    templateUrl : 'app/app.body.component.html'

})
export class AppBodyComponent implements OnInit {

    constructor() {

    }

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