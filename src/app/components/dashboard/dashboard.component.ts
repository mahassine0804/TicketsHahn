import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { CandidatsService } from 'src/app/service/candidats.service';
import { CompanyService } from 'src/app/service/company.service';
import { OffresService } from 'src/app/service/offres.service';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    count:any;
    admin:any;
    offercount:any;
    company:any;
    candidats:any;
    constructor( private AdminService:AdminService ,
         private OffresService:OffresService, 
         private CompanyService:CompanyService,
         private CandidatsService:CandidatsService) {
       
    }

    ngOnInit() {
      // this.AdminService.getAdminsCount().subscribe(res=>{
      //   this.count =res.admins;
      // });
      this.AdminService.getAdminsCountTerm('admin').subscribe(res=>{
        this.admin =res;
      });
      
      // this.OffresService.getOffreCount().subscribe(res=>{
        //   this.offercount =res;
        // });
        // this.CompanyService.getCompanyCount().subscribe(res=>{
          //   this.company=res;
          // });
          this.CandidatsService.getCandidatsCount().subscribe(res=>{
            this.candidats=res.candidat;
            this.count =res.admins;
        this.company = res.company;
        this.offercount = res.offers
      })
    }
   
 
}
