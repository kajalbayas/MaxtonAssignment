import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  displayedColumns: string[] = ['name', 'department', 'joining_date'];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  candidate: any; 
  paginator: MatPaginator;
  dataSource = new MatTableDataSource([]);
  length;

  // @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
  //   this.paginator = mp;
  // }

  constructor(private httpClient: HttpClient,
    private router: Router) { 
    this.httpClient.get('assets/candidate.json').subscribe(data=> {
      this.candidate = data['candidate_data'];
    });

    if (this.candidate !== undefined) {
      this.candidate = new MatTableDataSource(this.candidate);
      this.candidate.paginator = this.paginator;
      this.length= this.candidate.length;
    }
  }

  ngOnInit() {}  
}
