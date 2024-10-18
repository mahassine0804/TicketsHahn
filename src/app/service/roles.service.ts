import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { environment } from 'src/environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private baseUrl: string = `${environment.apiUrl}/AdminRoles`;

  constructor( private http:HttpClient) { }
  GetAdminsRoles() {
    return this.http.get<any>(this.baseUrl);
  }
  GetCountRoles() {
    return this.http.get<any>(`${this.baseUrl}/countRole`);
  }
  
  GetUserRoles(id:string) {
    return this.http.get<any>(`${this.baseUrl}/getUserRoles/${id}` );
  }
  CheckIfRoleUsed(id:string) {
    return this.http.get<any>(`${this.baseUrl}/CheckIfRoleUsed/${id}` );
  }
  getRoleById(id:string) {
    return this.http.get<any>(`${this.baseUrl}/${id}` );
  }
  DeleteRole(id:string) {
    return this.http.delete<any>(`${this.baseUrl}/${id}` );
  }
  PutRole(id:string,role:any) {
    return this.http.put<any>(`${this.baseUrl}/${id}`,role );
  }
  PostRole(role:any) {
    return this.http.post<any>(this.baseUrl,role );
  }
}
