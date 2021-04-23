import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import izitoast from 'izitoast';
import {
    IIzitoasInfoDefault,
    IIzitoastErrorDefault,
    IIzitoastSuccessDefault,
    IIzitoasWarningDefault,
} from '../models/izitoast-model';

@Injectable({
    providedIn: 'root',
})
export class IzitoastAlertService {
    //
    // ──────────────────────────────────────────────────────────────────────────────  ──────────
    //   :::::: C U S T O M I Z A B L E   A L E R T S : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────────────────────
    //

    CustomAlertsArray: any = [
        IIzitoastSuccessDefault,
        IIzitoasInfoDefault,
        IIzitoastErrorDefault,
        IIzitoasWarningDefault,
    ];

    constructor(
        private router: Router,
    ) {}

    //
    // ────────────────────────────────────────────────────────────────────────────────  ──────────
    //   :::::: C U S T O M   A L E R T   H A N D L E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────────────────────────
    //

    CustomSuccessAlert(message: string) {
        this.CustomAlertsArray[0].message = message;
        izitoast.success(this.CustomAlertsArray[0]);
    }

    CustomInfoAlert(message: string) {
        this.CustomAlertsArray[1].message = message;
        izitoast.info(this.CustomAlertsArray[1]);
    }

    CustomErrorAlert(message: string) {
        this.CustomAlertsArray[2].message = message;
        izitoast.error(this.CustomAlertsArray[2]);
    }
    
    CustomWarningAlert(message: string) {
        this.CustomAlertsArray[3].message = message;
        izitoast.warning(this.CustomAlertsArray[3]);
    }
}
