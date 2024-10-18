import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffresService {
  private baseUrl: string = `${environment.apiUrl}/offer/`;
  constructor(private http:HttpClient) { }
  getOffreCount(){
    return this.http.get<any>(`${this.baseUrl}getoffersCount`)
  }

  getofferspaginate(skip:number,take:number){
    return this.http.get<any>(`${this.baseUrl}getListOffresForAdmins/${skip}/${take}`)
  }
  toggleDesactivate(id: number, toggle: boolean): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}toggledesactivateAdministration/${toggle}/${id}`, { id, toggle });
}
removeOffre(offerId:any){
  return this.http.delete<any>(`${this.baseUrl}${offerId}`)
}
deleteOffers(OffersId: string[]): Observable<any> {
  return this.http.delete<any>(`${this.baseUrl}delete-list`, { body: OffersId });
}
updateOfferInfo(Offer:any,OfferId:any){
  return this.http.put<any>(`${this.baseUrl}updateOffrerInfo/${OfferId}`,Offer)
}
searchOfferPaginateForadmin(skip:number,limit:number,term:string,company:any){
return this.http.get<any>(`${this.baseUrl}searchOfferAdminsPaginate/${skip}/${limit}/${term}/${company}`)

}
searchOfferPaginateForadminParameter(skip:number,limit:number,company:any){
return this.http.get<any>(`${this.baseUrl}getOfferAdmnWithSelectCompany/${skip}/${limit}/${company}`)
}
getCompaniesList(){
  return this.http.get<any>(`${this.baseUrl}getCompaniesFordropdown`)
}

}
