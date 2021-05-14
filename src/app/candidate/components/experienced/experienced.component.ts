import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-experienced',
  templateUrl: './experienced.component.html',
  styleUrls: ['./experienced.component.scss']
})

export class ExperiencedComponent implements OnInit {

  displayedColumns: string[] = ['name', 'department', 'joining_date'];
  candidateDetails;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get('assets/candidate.json').subscribe(data => {
      this.candidateDetails = data['candidate_data'];
      if (this.candidateDetails !== undefined) {
        this.getExperienceCandidate();
      }
    });
  }

  getExperienceCandidate() {
    let result = this.candidateDetails.filter(element => {
      if (element.joining_date) {
        const convertAge = new Date(Date.parse(element.joining_date));
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
        const diff = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
        if (diff >= 2) {
          return true;
        }
      }
    });
    this.candidateDetails = result;
  }
}