import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss']
})
export class CandidateDetailsComponent implements OnInit {
 displayedColumns: string[] = ['name', 'department', 'joining_date'];
  candidate: any = [];
  removedDepartmentCandiateData =  [];
  searchText: string;
 

  constructor(private httpClient: HttpClient,
    private router: Router) {}

  ngOnInit() {
     this.httpClient.get('assets/candidate.json').subscribe(data => {
      this.candidate = data['candidate_data'];
    });
  }
}