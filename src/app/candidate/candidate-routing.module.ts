import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SortingComponent } from '../candidate/components/sorting/sorting.component';
import { SearchComponent } from '../candidate/components/search/search.component';
import { UniqueDepartmentComponent } from '../candidate/components/unique-department/unique-department.component';
import { RemoveDepartmentComponent } from '../candidate/components/remove-department/remove-department.component';
import { ExperiencedComponent } from '../candidate/components/experienced/experienced.component';
import { CandidateComponent } from '../candidate/candidate.component';
import { CandidateDetailsComponent } from '../candidate/components/candidate-details/candidate-details.component';

@NgModule({
  imports: [
    
    RouterModule.forChild([
      {
      path : '',
      component : CandidateComponent,
      children: [
        {
          path: '',
          component: CandidateDetailsComponent
        },
        { path: 'candidateDetails', component: CandidateDetailsComponent },
        { path: 'sort', component: SortingComponent },
        { path: 'search', component: SearchComponent },
        { path: 'distinctDepartment', component: UniqueDepartmentComponent },
        { path: 'removedDepartment', component: RemoveDepartmentComponent },
        { path: 'experienceCandidate', component: ExperiencedComponent },
      ]
    }
    ])
  ],
  exports: [ RouterModule ]
})
export class CandidateRoutingModule { }