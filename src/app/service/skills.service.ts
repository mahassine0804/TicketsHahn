import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, skip } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private baseUrl: string = `${environment.apiUrl}/Skills/`;
  Urlimage:string=`${this.baseUrl}uploadimage`

  constructor(private http:HttpClient) { }
  getskillsPaginate(skip:number,limit:number){
    return this.http.get<any>(`${this.baseUrl}getSkillsPaginate/${skip}/${limit}`)
  }
  public toggleDesactivate(id: number, toggle: boolean): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}toggledesactivate/${toggle}/${id}`, { id, toggle });
  }
  removeSkill(SkillId:any){
    return this.http.delete<any>(`${this.baseUrl}${SkillId}`)
  }
  updateSkillName(Skill:any){
    return this.http.put<any>(`${this.baseUrl}${Skill.skillsId}`,Skill)
  }
  SearchSkillsPaginate(skip:number,limit:number,term:string){
    return this.http.get<any>(`${this.baseUrl}SearchSkillsPaginate/${skip}/${limit}/${term}`)
  }
  addNewSkill(skill:any){
    return this.http.post<any>(`${this.baseUrl}`,skill)
  }
  deleteSkillsByIds(ids: number[]): Observable<any> {
    const url = `${this.baseUrl}/delete-skills`;
    return this.http.post(url, { ids });
  }
  deleteSkills(skillIds: string[]): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}delete-list`, { body: skillIds });
}
uploadSkillImage(data:any){

  return this.http.post<any>(`${this.baseUrl}uploadimage`, data);

}
GetSkillsNopaginate(){
    
  return this.http.get<any>(`${this.baseUrl}getallSkillsNoPaginate`)  
}
}
