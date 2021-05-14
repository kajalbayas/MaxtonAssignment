import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {
  sortedCandidateArray = [];
  displayedColumns: string[] = ['name', 'department', 'joining_date'];
  employeeData;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get('assets/candidate.json').subscribe(data => {
      this.employeeData = data['candidate_data'];
     
        if (this.employeeData !== undefined) {
          this.sortedCandidateArray = this.employeeData.sort((a, b) => a.name > b.name  ? 1 : -1)
        }
    });
  }
}
