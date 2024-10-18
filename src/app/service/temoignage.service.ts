import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemoignageService {

  constructor(private http:HttpClient) { }
  getlistTemoignage(skip:number , limit:number){
    return this.http.get(<any>(`${environment.apiUrl}/Temoignage/listTemoignageForAdmin/${skip}/${limit}`))
  }
  accepterTemoignage(temId:any ){
    return this.http.get(<any>(`${environment.apiUrl}/Temoignage/accepter/${temId}`))
  }
  refuserTemoignage(temId:any ){
    return this.http.get(<any>(`${environment.apiUrl}/Temoignage/refuser/${temId}`))
  }
  ignorerTemoignage(temId:any){
    return this.http.get(<any>(`${environment.apiUrl}/Temoignage/ignorer/${temId}`))
  }
  // public toggleDesactivate(id: number, toggle: boolean): Observable<any> {
  //   return this.http.post<any>(`${environment.apiUrl}/Temoignage/toggledesactivate/${toggle}/${id}`, { id, toggle });
  // }
  searchtemoignage(term:any,skip:number,take:number){
    return this.http.get(<any>(`${environment.apiUrl}/Temoignage/searchlistTemoignage/${skip}/${take}/${term}`))
    
  }
  deletetem(temoingageId: string[]): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/Temoignage/delete-list`, { body: temoingageId });
  }
}
