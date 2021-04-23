import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { TitleHeaderComponent } from './components/title-header/title-header.component';
import { ModuleCardComponent } from './components/module-card/module-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        RouterModule,

        // Material
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatTooltipModule
    ],
    declarations: [
        LoadingOverlayComponent,
        TitleHeaderComponent,
        ModuleCardComponent,
    ],
    exports: [
        LoadingOverlayComponent,
        TitleHeaderComponent,
        ModuleCardComponent,
    ],
})
export class SharedModule {}
