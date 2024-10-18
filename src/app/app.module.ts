import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { CountryService } from './service/country.service';
import { EventService } from './service/event.service';
import { IconService } from './service/icon.service';
import { NodeService } from './service/node.service';

import { AdminService } from './service/admin.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';


@NgModule({
    declarations: [AppComponent],
    imports: [AppRoutingModule,CommonModule,AppLayoutModule,ProgressSpinnerModule ,ReactiveFormsModule,
        NgxPermissionsModule.forRoot(),
   
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
       
        CountryService,  AdminService,EventService, IconService, NodeService,
         
    ],
    exports: [
        
        NgxPermissionsModule,
          ],
    bootstrap: [AppComponent],
   
})
export class AppModule {}
