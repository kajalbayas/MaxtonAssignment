import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from '../candidate/candidate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { SortingComponent } from './components/sorting/sorting.component';
import { SearchComponent } from './components/search/search.component';
import { ExperiencedComponent } from './components/experienced/experienced.component';
import { UniqueDepartmentComponent } from './components/unique-department/unique-department.component';
import { RemoveDepartmentComponent } from './components/remove-department/remove-department.component';
import { CandidateRoutingModule } from '../candidate/candidate-routing.module';

@NgModule({
  declarations: [
    CandidateComponent,
    SortingComponent,
    SearchComponent,
    ExperiencedComponent,
    UniqueDepartmentComponent,
    RemoveDepartmentComponent
  ],
  imports: [
    BrowserModule,
    CandidateRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
})

export class CandidateModule { 
}