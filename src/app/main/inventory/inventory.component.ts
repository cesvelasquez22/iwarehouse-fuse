import { Component, OnInit } from '@angular/core';
import { IModuleCard } from '@core/models/module-card.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
    groupModules = 'Equipo';
    imageModules = 'assets/images/cards/Inventario.jpeg';
    moduleCards: IModuleCard[] = [
        {
            module: 'Cases',
            group: this.groupModules,
            image: this.imageModules,
            route: 'cases'
        },
        {
            module: 'Monitores',
            group: this.groupModules,
            image: this.imageModules,
            route: 'monitors'
        },
        {
            module: 'Proyectores',
            group: this.groupModules,
            image: this.imageModules,
            route: 'projectors'
        }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
