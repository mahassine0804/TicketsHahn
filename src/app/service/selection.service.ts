import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  DeleteList: any[] = [];
  checkboxState: { [key: string]: boolean } = {};
  selectedSkills: string[] = [];
  constructor() { }

  addToDeleteList(skillId: any) {
    if (!this.DeleteList.includes(skillId.skillId)) {
      this.DeleteList.push(skillId);
    }
    const index = this.DeleteList.findIndex(skill => skill.skillsId === skillId);
    if (index !== -1) {
      this.DeleteList.splice(index, 1);
      delete this.checkboxState[skillId];
    }
    this.checkboxState[skillId] = true;
  }
  
  removeFromDeleteList(skillId: any) {
    const index = this.DeleteList.findIndex(skill => skill.skillsId === skillId.skillsId);
    if (index !== -1) {
      this.DeleteList.splice(index, 1);
      delete this.checkboxState[skillId];
    }
  }
  isCheckboxChecked(skillId: string): boolean {
    return this.DeleteList.some(skill => skill.skillsId === skillId);
}

  addToSelectedSkills(skillId: string) {
    if (!this.selectedSkills.includes(skillId)) {
      this.selectedSkills.push(skillId);
    }
  }

  removeFromSelectedSkills(skillId: string) {
    const index = this.selectedSkills.indexOf(skillId);
    if (index !== -1) {
      this.selectedSkills.splice(index, 1);
    }
  }
}
