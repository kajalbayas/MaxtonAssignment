import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unique-department',
  templateUrl: './unique-department.component.html',
  styleUrls: ['./unique-department.component.scss']
})
export class UniqueDepartmentComponent implements OnInit {

  displayedColumns: string[] = ['name', 'department', 'joining_date'];
  candidateDetails;
  distinctDepartmentCandidates: any = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get('assets/candidate.json').subscribe(data => {
      this.candidateDetails = data['candidate_data'];
      if (this.candidateDetails !== undefined) {
        this.getDistinctRecords();
      }
    });
  }

  getDistinctRecords() {
    let flag = [];
    let obj = this.candidateDetails;
    this.candidateDetails.filter(item => {
        if (flag[item.department]) {
        return false;
      }
      flag[item.department] = true;
      let count = obj.filter(element => {
        return element.department === item.department;
      });
      this.distinctDepartmentCandidates.push({
        department: item.department,
        count: count ? count.length : 0
      });
      return true;
    });
    console.log(this.distinctDepartmentCandidates);
  }
}
