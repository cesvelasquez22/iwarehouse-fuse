import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'principal',
        title    : 'Principal',
        type     : 'group',
        children : [
            {
                id       : 'home',
                title    : 'Inicio',
                type     : 'item',
                icon     : 'home',
                url      : 'home',
            }
        ]
    },
    {
        id       : 'apps',
        title    : 'Módulos',
        type     : 'group',
        children : [
            {
                id       : 'inventory',
                title    : 'Inventario',
                type     : 'item',
                icon     : 'ballot',
                url      : 'inventory',
            },
            {
                id       : 'offices',
                title    : 'Oficinas',  
                type     : 'item',
                icon     : 'assignment',
                url      : 'offices',
            },
            {
                id       : 'rooms',
                title    : 'Aulas',
                type     : 'item',
                icon     : 'assignment',
                url      : 'rooms',
            },
        ]
    },
    {
        id       : 'backoffice',
        title    : 'Backoffice',
        type     : 'group',
        children : [
            {
                id       : 'users',
                title    : 'Usuarios',
                type     : 'item',
                icon     : 'person_pin',
                url      : 'admin-users',
            },
        ]
    },
];
