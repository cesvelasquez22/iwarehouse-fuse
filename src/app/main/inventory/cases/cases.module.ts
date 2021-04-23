import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseListComponent } from './components/list/case-list.component';
import { CaseDetailComponent } from './components/detail/case-detail.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { CasesService } from './services/cases.service';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FlexLayoutModule } from '@angular/flex-layout';

const casesRoutes: Route[] = [
    { path: '', component: CaseListComponent },
    { path: 'create', component: CaseDetailComponent },
    { path: ':id', component: CaseDetailComponent },
];

@NgModule({
  declarations: [CaseListComponent, CaseDetailComponent],
  providers: [CasesService],
  imports: [
    CommonModule,
    RouterModule.forChild(casesRoutes),
    SharedModule,
    FlexLayoutModule,

    // Material
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule
  ]
})
export class CasesModule { }
