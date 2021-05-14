import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-department',
  templateUrl: './remove-department.component.html',
  styleUrls: ['./remove-department.component.scss']
})
export class RemoveDepartmentComponent implements OnInit {
  removedDepartmentCandiateData = [];
  displayedColumns: string[] = ['name', 'department', 'joining_date'];
  candidateDetails;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get('assets/candidate.json').subscribe(data => {
      this.candidateDetails = data['candidate_data'];
    });
  }

  removeCandidateFromDevelopment() {
    if (this.candidateDetails !== undefined && this.candidateDetails.length > 0) {
     this.candidateDetails.filter(item => { 
      if (item.department !== "Development") {
      this.removedDepartmentCandiateData.push(item)
      }
    });
  }
    if ( this.removedDepartmentCandiateData) {
    this.candidateDetails= [];
    this.candidateDetails = this.removedDepartmentCandiateData;
    }
  }
}
