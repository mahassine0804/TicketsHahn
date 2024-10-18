import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatsService {
  private baseUrl: string = `${environment.apiUrl}/Candidats/`;

  constructor(private http:HttpClient) { }
  getCandidatsCount(){
    return this.http.get<any>(`${this.baseUrl}getCandidatCount`)
  }
}
