import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SortingComponent } from '../candidate/components/sorting/sorting.component';
import { SearchComponent } from '../candidate/components/search/search.component';
import { UniqueDepartmentComponent } from '../candidate/components/unique-department/unique-department.component';
import { RemoveDepartmentComponent } from '../candidate/components/remove-department/remove-department.component';
import { ExperiencedComponent } from '../candidate/components/experienced/experienced.component';
import { CandidateComponent } from '../candidate/candidate.component';

const routes: Routes = [
  {
    path: '',
    component: CandidateComponent,
    
    children: [
      
       
        
          
          { path: 'sort', component: SortingComponent }
        
      
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CandidateRoutingModule { }