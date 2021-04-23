import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICase } from '@core/models/case.model';
import { environment } from 'environments/environment';

@Injectable()
export class CasesService {
    constructor(private http: HttpClient) {}
    //
    // ────────────────────────────────────────────── I ──────────
    //   :::::: G E T : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────
    //
    getAllCases() {
        return this.http.get<ICase[]>(`${environment.API_URL}we-cases`);
    }

    getCaseById(caseId: string) {
        return this.http.get<ICase>(`${environment.API_URL}we-cases/${caseId}`);
    }

    //
    // ──────────────────────────────────────────────── II ──────────
    //   :::::: P O S T : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────
    //
    createCase(newCase: ICase) {
        return this.http.post<ICase>(`${environment.API_URL}we-cases`, newCase);
    }

    //
    // ──────────────────────────────────────────────────── III ──────────
    //   :::::: U P D A T E : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    updateCase(newCase: ICase) {
        return this.http.put(
            `${environment.API_URL}we-cases/${newCase.id}`,
            newCase
        );
    }
}
