import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LoaderService } from './service/loader.service';
import { Subject } from 'rxjs';
import { RolesService } from './service/roles.service';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    isLoading: Subject<boolean> = this.loader.isLoading;

    
    constructor(  private permissionsService:NgxPermissionsService,  private RoleService :RolesService,private loader: LoaderService,private cdr: ChangeDetectorRef,
        private primengConfig: PrimeNGConfig) { }
    ngAfterViewInit() {
       this.isLoading.subscribe(() => {
         this.cdr.detectChanges();
       });
     }
    ngOnInit() {
        this.primengConfig.ripple = true;


      //  var userlocal = sessionStorage.getItem('adminId') ?? ''; 
      //   this.RoleService.GetUserRoles(userlocal).subscribe((data: any) => { 
      //     var Userroles2 = data.accessright; 
      //     var a =  Userroles2.split(","); 
      //     this.permissionsService.loadPermissions(a); 
      // });
    }
}
