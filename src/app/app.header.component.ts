import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header-comp',
    templateUrl : 'app/app.header.component.html'

})
export class AppHeaderComponent implements OnInit {

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