import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
 import { AppLayoutComponent } from "./layout/app.layout.component";


@NgModule({
    imports: [
        RouterModule.forRoot([
           
            { path: '', loadChildren: () => import('./components/pages/langue/langue.module').then(m => m.LangueModule),
               data:{
                
                }},
            
          
      

             ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
