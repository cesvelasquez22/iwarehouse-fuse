import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectorListComponent } from './components/list/projector-list.component';
import { ProjectorDetailComponent } from './components/detail/projector-detail.component';
import { Route, RouterModule } from '@angular/router';

const projectorsRoutes: Route[] = [
    { path: '', component: ProjectorListComponent },
    { path: 'create', component: ProjectorDetailComponent },
    { path: ':id', component: ProjectorDetailComponent },
];

@NgModule({
  declarations: [ProjectorListComponent, ProjectorDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(projectorsRoutes),
  ]
})
export class ProjectorsModule { }
