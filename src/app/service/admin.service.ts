import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
 
@Injectable({
    providedIn: 'root'
  })
export class AdminService {
    private baseUrl: string = `${environment.apiUrl}/Admins/`;

    constructor( private http:HttpClient) { }

    GetAdminsPaginate(skip:number, limit:number) {
        return this.http.get<any>(`${this.baseUrl}getAdminsPaginate/${skip}/${limit}`);
      }
    getAdminsCount(){
      return this.http.get<any>(`${this.baseUrl}getAdminsCount`);

    }
    getAdminsCountTerm(term:string){
      return this.http.get<any>(`${this.baseUrl}getAdminsCount/${term}`);

    }
      GetAdminById(id:string) {
        return this.http.get<any>(`${this.baseUrl}${id}`);
      }
      ChangePassword(admin:any) {
        return this.http.post<any>(`${this.baseUrl}changepassword`,admin);
      }
      PutAdmin(id:string, admin:any) {
        return this.http.put<any>(`${this.baseUrl}${id}`,admin);
      }
      SearchAdminPaginate(skip:number,limit:number,term:string){
        return this.http.get<any>(`${this.baseUrl}getAdminsPaginateSearch/${skip}/${limit}/${term}`)
      }
      GetAdminSearchCount(term:string){
        return this.http.get<any>(`${this.baseUrl}getAdminsCount/${term}`)
      }
      removeadminById(Idadmin:any){
        return this.http.delete<any>(`${this.baseUrl}deleteUserById/${Idadmin}`)  
      }
      deleteAdminss(Adminid: string[]): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}delete-list`, { body: Adminid });
    }
      
}
