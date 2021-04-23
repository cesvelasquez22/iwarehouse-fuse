import { Component, Input, OnInit } from '@angular/core';
import { IModuleCard } from '@core/models/module-card.model';

@Component({
    selector: 'app-module-card',
    templateUrl: './module-card.component.html',
    styleUrls: ['./module-card.component.scss'],
})
export class ModuleCardComponent implements OnInit {
    @Input() moduleCard: IModuleCard;

    constructor() {}

    ngOnInit(): void {}
}
