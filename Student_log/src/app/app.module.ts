import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { AddformComponent } from './addform/addform.component';
import { SearchformComponent } from './searchform/searchform.component';
import { TabComponent } from './tab/tab.component';
import { DeleteformComponent } from './deleteform/deleteform.component';
import { ListallComponent } from './listall/listall.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AddformComponent,
    SearchformComponent,
    TabComponent,
    DeleteformComponent,
    ListallComponent,
    // ReactiveFormsModule
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
