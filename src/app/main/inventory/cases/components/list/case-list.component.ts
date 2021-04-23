import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { ICase } from '@core/models/case.model';
import { CasesService } from '../../services/cases.service';

@Component({
    selector: 'app-case-list',
    templateUrl: './case-list.component.html',
    styleUrls: ['./case-list.component.scss'],
})
export class CaseListComponent implements OnInit, OnDestroy {
    //
    // ─── PARAMS ─────────────────────────────────────────────────────────────────────
    //
    loading: boolean;

    //
    // ─── RELATED TO TABLE ───────────────────────────────────────────────────────────
    //
    displayedColumns: string[] = [
        'posicion',
        'serial',
        'brand',
        'model',
        'inventoryCode',
        'actions',
    ];
    dataSource = new MatTableDataSource<ICase>([]);
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

    //
    // ─── UNSUBSCRIBE ALL ────────────────────────────────────────────────────────────
    //
    private unsubscribe$: Subject<any> = new Subject();

    constructor(
        private casesService: CasesService
    ) {}

    ngOnInit(): void {
        this.getProducts();
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    getProducts() {
        this.loading = true;
        this.casesService.getAllCases().subscribe(
            (cases) => {
                if (cases && cases.length > 0) {
                    this.dataSource = new MatTableDataSource<ICase>(
                        cases
                    );
                    this.dataSource.paginator = this.paginator;
                }
                this.loading = false;
            },
            (err) => (this.loading = false)
        );
    }   
}
