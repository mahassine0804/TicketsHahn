import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { MenuService } from './app.menu.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styleUrls: ['./app.topbar.component.scss'],

})
export class AppTopBarComponent {

    active1:boolean=false;
    active2:boolean=false;
    active3:boolean=false;
    dark:boolean=false;
    light:boolean=true;
    show: boolean =false;
    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;
   
    dropdownOpen: boolean = false;

    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    }

   

   

    constructor(
        public layoutService: LayoutService,
        public menuService: MenuService,private router:Router
    ) {

        if( localStorage.getItem("theme") == 'dark'){
            this.changeThemeToDark();
           }
    }

   

  

    set theme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            theme: val,
        }));
    }
    get theme(): string {
        return this.layoutService.config().theme;
    }

    set colorScheme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            colorScheme: val,
        }));
    }
    get colorScheme(): string {
        return this.layoutService.config().colorScheme;
    }

    logout(){
        sessionStorage.clear();
        localStorage.removeItem('token');
        this.router.navigate(['login'])
    }
    changeThemeToWhite() {
        this.theme = 'lara-light-indigo';
        this.colorScheme = 'light';
        this.show=false;
        localStorage.setItem("theme",'light');
        this.light=!this.light;
        this.dark=false;
        this.active2=false;
        this.active1=false;
        this.active3=false;
    }
    changeThemeToDark() {
        this.theme = 'lara-dark-indigo';
        this.colorScheme = 'dark';
        this.show=true;
        localStorage.setItem("theme",'dark');
        this.dark=!this.dark;
        this.light=false;
        this.active2=false;
        this.active1=false;
        this.active3=false;
    }
    changeThemeToLightBlue(){
        this.theme = 'lara-light-blue';
        this.colorScheme = 'light';
       this.active1=!this.active1
       this.active2=false;
        this.active3=false;
        localStorage.setItem("theme",'light');
    }
    changeThemeToLightPurple(){
        this.theme = 'lara-light-purple';
        this.colorScheme = 'light';
        this.active2=!this.active2;
        this.active1=false;
        this.active3=false;
        localStorage.setItem("theme",'light');
    }
    changeThemeToLightTeal(){
        this.theme = 'lara-light-teal';
        this.colorScheme = 'light';
        this.active3=!this.active3;
        this.active2=false;
        this.active1=false;
        localStorage.setItem("theme",'light');
    }
    changeThemeToDarkBlue(){
        this.theme = 'lara-dark-blue';
        this.colorScheme = 'dark';
        this.active1=!this.active1
        this.active2=false;
         this.active3=false;
        localStorage.setItem("theme",'dark');
    }
    changeThemeToDarkPurple(){
        this.theme = 'lara-dark-purple';
        this.colorScheme = 'dark';
        this.active2=!this.active2;
        this.active1=false;
        this.active3=false;
        localStorage.setItem("theme",'dark');
    }
    changeThemeToDarkTeal(){
        this.theme = 'lara-dark-teal';
        this.colorScheme = 'dark';
        this.active3=!this.active3;
        this.active2=false;
        this.active1=false;
        localStorage.setItem("theme",'dark');
    }
    changeTheme(theme: string, colorScheme: string) {
        this.theme = theme;
        this.colorScheme = colorScheme;

    }
  
}
