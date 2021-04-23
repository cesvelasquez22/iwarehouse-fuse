import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorListComponent } from './components/list/monitor-list.component';
import { MonitorDetailComponent } from './components/detail/monitor-detail.component';
import { Route, RouterModule } from '@angular/router';


const monitorsRoutes: Route[] = [
    { path: '', component: MonitorListComponent },
    { path: 'create', component: MonitorDetailComponent },
    { path: ':id', component: MonitorDetailComponent },
];

@NgModule({
  declarations: [MonitorListComponent, MonitorDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(monitorsRoutes),
  ]
})
export class MonitorsModule { }
