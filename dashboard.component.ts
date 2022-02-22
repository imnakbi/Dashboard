import { DashboardService } from './../dashboard.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  id: number;
  satisfaction: number;
  presence: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Mohamed', satisfaction: 51.0079, presence: 'non'},
  {id: 2, name: 'Ali', satisfaction: 49.0026, presence: 'oui'},
  {id: 3, name: 'Maryem', satisfaction: 96.941, presence: 'non'},
  {id: 4, name:'Firas', satisfaction: 29.0122, presence: 'oui'},
  {id: 5, name: 'Houssem', satisfaction: 10.811, presence: 'oui'},
  {id: 6, name: 'Asma', satisfaction: 12.0107, presence: 'non'},
  {id: 7, name: 'Insaf', satisfaction: 14.0067, presence: 'oui'},
  {id: 8, name: 'Ahmed', satisfaction: 87.9994, presence: 'oui'},
  {id: 9, name: 'Imen', satisfaction: 38.9984, presence: 'oui'},
  {id: 10, name: 'Malek', satisfaction: 20.1797, presence: 'non'},
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [] as  any;
  cards = [] as  any;
  pieChart =[] as  any;
  
  displayedColumns: string[] = ['id', 'name', 'satisfaction', 'presence'];
  dataSource = ELEMENT_DATA;

  constructor(private DashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.DashboardService.bigChart();
    this.cards = this.DashboardService.cards();
    this.pieChart = this.DashboardService.pieChart();
    
  }

}
