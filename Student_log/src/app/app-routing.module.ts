import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddformComponent } from './addform/addform.component';
import { SearchformComponent } from './searchform/searchform.component';
import { DeleteformComponent } from './deleteform/deleteform.component';
import { ListallComponent } from './listall/listall.component';


const routes: Routes = [

 { path:'add' , component: AddformComponent },
 { path: 'search' , component: SearchformComponent},
 { path: 'delete' , component: DeleteformComponent },
 { path: 'listall' , component: ListallComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
