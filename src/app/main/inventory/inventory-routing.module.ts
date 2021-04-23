import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory.component';

const routes: Route[] = [
    { path: '', component: InventoryComponent },
    {
        path: 'cases', 
        loadChildren: () => import('./cases/cases.module').then(m => m.CasesModule)
    },
    {
        path: 'monitors', 
        loadChildren: () => import('./monitors/monitors.module').then(m => m.MonitorsModule)
    },
    {
        path: 'projectors', 
        loadChildren: () => import('./projectors/projectors.module').then(m => m.ProjectorsModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InventoryRoutingModule { }
