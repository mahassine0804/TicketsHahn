import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ngxPermissionsGuard } from 'ngx-permissions';

@NgModule({
    imports: [RouterModule.forChild([

        

      

      

        { path: 'langue', loadChildren: () => import('./langue/langue.module').then(m => m.LangueModule),
        canActivate:[ngxPermissionsGuard] ,data:{
        permissions:{
        only:["143"],
        redirectTo:"/",
        }
        }},

       
         

    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
