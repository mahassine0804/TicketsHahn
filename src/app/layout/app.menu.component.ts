import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: [''] }
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Gestion des utilisateurs',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/pages/gestion-des-utilisateur']
                    },
                    {
                        label: 'Gestion des offres',
                        icon: 'pi pi-fw pi-briefcase',
                        routerLink: ['/pages/gestion-des-offres']
                    },
                    
                    {
                        label: 'Gestion des companies',
                        icon: 'pi pi-fw pi-building',
                        routerLink: ['/pages/gestion-des-companies']
                    },
                    {
                        label: 'Gestion des Témoignages',
                        icon: 'pi pi-fw pi-building',
                        routerLink: ['/pages/gestion-des-temoignages']
                    },
                    {
                        label: 'Parametrage',
                        icon: 'pi pi-fw pi-cog',
                        items: [
                            {
                                label: 'Compétance',
                                icon: 'pi pi-fw pi-book',
                                routerLink: ['/pages/competance']
                            },
                            {
                                label: 'Secteur',
                                icon: 'pi pi-fw pi-circle',
                                routerLink: ['/pages/secteur']
                            },
                            {
                                label: 'Langue',
                                icon: 'pi pi-fw pi-language',
                                routerLink: ['/pages/langue']
                            }
                        ]
                    },
                    {
                        label: 'Administration',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Gestion des roles',
                                icon: 'pi pi-fw pi-circle',
                                routerLink: ['/pages/gestion-des-roles']
                            },
                            // {
                            //     label: 'Error',
                            //     icon: 'pi pi-fw pi-times-circle',
                            //     routerLink: ['/auth/error']
                            // }
                        ]
                    },
                    
                    // {
                    //     label: 'Not Found',
                    //     icon: 'pi pi-fw pi-exclamation-circle',
                    //     routerLink: ['/notfound']
                    // },
                    
                ]
            },
            // {
            //     label: 'UI Components',
            //     items: [
            //         { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
            //     ]
            // },

         
           
        ];
    }
}
