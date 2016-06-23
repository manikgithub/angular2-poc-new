import { Injector, Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router-deprecated';

export class BaseComponent {
    router: Router;

    constructor(public injector: Injector) {
        this.router = this.injector.get(Router);
        // let annotations = Reflect.getMetadata('annotations', this.constructor);
        // for (let i=0; i<annotations.length; i++) {
        //     if (annotations[i].constructor.name === 'CanActivate') {
        //         return;
        //     }
        // }

        // annotations.push(
        //     new CanActivate((nextInstr: any, currInstr: any) => {
        //         console.log("===> CanActivate got called");
        //         return true;
        //     })
        // );
    }
}