import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  constructor(private http:HttpClient) { }

  private baseUrl: string = `${environment.apiUrl}/Sector/`;

  getsectorsPaginate(skip:number,limit:number){
    return this.http.get<any>(`${this.baseUrl}getsectorpaginate/${skip}/${limit}`)  
  }
  public toggleDesactivate(id: number, toggle: boolean): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}toggledesactivate/${toggle}/${id}`, { id, toggle });
  }
  removeSector(sectorId:any){
    return this.http.delete<any>(`${this.baseUrl}${sectorId}`)
  }
  updateSectorName(Sector:any){
    return this.http.put<any>(`${this.baseUrl}`,Sector)
  }
  GetsectorsNopaginate(){
    
    return this.http.get<any>(`${this.baseUrl}getallSectorsNoPaginate`)  
  }
  sectorSearchPaginate(skip:number,limit:number,term:string){
    return this.http.get<any>(`${this.baseUrl}searchSectorPaginate/${skip}/${limit}/${term}`)

  }
  AddNewSector(Sector:any){
    return this.http.post<any>(`${this.baseUrl}addNewSector`,Sector)
  }
  deleteSectorss(SectorId: string[]): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}delete-list`, { body: SectorId });
}
}
