import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FullLayoutContainer } from './layout/containers/full-layout/full-layout-container';
import { SimpleLayoutContainer } from './layout/containers/simple-layout/simple-layout.container';

const routes: Route[] = [
    {
        path: '',
        component: SimpleLayoutContainer,
        children: [
            {
                path: '',
                redirectTo: 'auth',
                pathMatch: 'full',
            },
            {
                path: 'auth',
                loadChildren: () =>
                    import('./auth/auth.module').then((m) => m.AuthModule),
            },
        ],
    },
    {
        path: 'apps',
        component: FullLayoutContainer,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'home' },
            {
                path: 'home',
                loadChildren: () =>
                    import('./main/dashboards/project/project.module').then(
                        (m) => m.ProjectDashboardModule
                    ),
            },
            {
                path: 'inventory',
                loadChildren: () =>
                    import('./main/inventory/inventory.module').then(
                        (m) => m.InventoryModule
                    ),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
