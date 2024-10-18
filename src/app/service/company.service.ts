import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }
  private baseUrl: string = `${environment.apiUrl}/Company/`;

  getcompanyPaginate(skip:number,limit:number){
    return this.http.get<any>(`${this.baseUrl}getCompaniesPaginate/${skip}/${limit}`)  
  }
  removeCompanyById(Idcompany:any){
    return this.http.delete<any>(`${this.baseUrl}deletecompById/${Idcompany}`)  
  }
  updateCompanyInfo(Company:any,companyId:any){
    return this.http.post<any>(`${this.baseUrl}updateCompanyInfo/${companyId}`,Company)
  }
  SearchCompanyPaginate(skip:number,limit:number,term:string){
    return this.http.get<any>(`${this.baseUrl}SearchCompanyPaginate/${skip}/${limit}/${term}`)
  }
  deleteCompanys(Companyid: string[]): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}delete-list`, { body: Companyid });
}
getCompanyCount(){
  return this.http.get<any>(`${this.baseUrl}getCompanyCount`)
}
getCompaniesForDropDown(){
  return this.http.get<any>(`${this.baseUrl}getCompaniesFordropdown`)
}
getCompaniesForDropDownSearch(term:string){
  return this.http.get<any>(`${this.baseUrl}getCompaniesFordropdownSearch/${term}`)
}
uploadcompanyImage(data:any){

  return this.http.post<any>(`${this.baseUrl}uploadimageAdmins`, data);

}

}
