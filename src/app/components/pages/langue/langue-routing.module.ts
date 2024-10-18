import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LangueComponent } from './langue.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path:'',component:LangueComponent}
  ])],
  exports: [RouterModule]
})
export class LangueRoutingModule { }
