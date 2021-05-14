import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  displayedColumns: string[] = ['name', 'department', 'joining_date'];
  employeeData;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get('assets/candidate.json').subscribe(data => {
      this.employeeData = data['candidate_data'];
    });
  }
}
