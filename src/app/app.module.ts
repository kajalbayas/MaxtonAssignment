import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { FormsModule } from '@angular/forms'; 
import { CandidateModule } from '../app/candidate/candidate.module';
import { EntryComponentComponent } from './entry-component/entry-component.component';

const routes: Routes = [
  {
    path: '',
    component : EntryComponentComponent
  },
  {
    path: 'candidateDetails',
    loadChildren: () => import('./candidate/candidate.module').then(m => m.CandidateModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EntryComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
 })

export class AppModule { 
}