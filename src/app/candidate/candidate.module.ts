
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { CandidateComponent } from '../candidate/candidate.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { SortingComponent } from './components/sorting/sorting.component';
import { SearchComponent } from './components/search/search.component';
import { ExperiencedComponent } from './components/experienced/experienced.component';
import { UniqueDepartmentComponent } from './components/unique-department/unique-department.component';
import { RemoveDepartmentComponent } from './components/remove-department/remove-department.component';
import { CandidateRoutingModule } from '../candidate/candidate-routing.module';
import { FormsModule } from '@angular/forms'; 
import { SearchPipe } from '../candidate/services/search.pipe';
import { CandidateDetailsComponent } from './components/candidate-details/candidate-details.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    CandidateComponent,
    SortingComponent,
    SearchComponent,
    ExperiencedComponent,
    UniqueDepartmentComponent,
    RemoveDepartmentComponent,
    SearchPipe,
    CandidateDetailsComponent
  ],
  imports: [
   CandidateRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    CommonModule,
    MatButtonModule
  ],
  providers: [SearchPipe],
})

export class CandidateModule { 
}