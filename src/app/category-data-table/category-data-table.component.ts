import { Component, OnInit,ViewChild } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {MatSort} from '@angular/material';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import { RegisteruserService } from '../registeruser.service';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-category-data-table',
  templateUrl: './category-data-table.component.html',
  styleUrls: ['./category-data-table.component.css']
})

export class CategoryDataTableComponent implements OnInit {
  public receivedData = [];
  dataSource: ExampleDataSource;

  @ViewChild(MatSort) sort: MatSort;
  dataSubject = new BehaviorSubject<any[]>([]);

  displayedColumns = ['Type','categoryNumber','createdTime','detailes','value','phonemcode','wordActive'];

  constructor(private regService:RegisteruserService) {
    this.regService.getCatogories().subscribe((data) =>{
console.log(data);
      this.dataSubject.next(data.data);
      console.log(this.dataSubject);

    });

  }

  ngOnInit() {

    this.dataSource = new ExampleDataSource(this.dataSubject,this.sort);

  }

}

/*export interface Element {
  /!*_id: String;*!/

  detailes: String;
  value: String;
  phonemcode:String;
 /!* userId:string;
  wordActive:boolean;*!/

}*/

/*let data: Element[] =   this.receivedData;*/
/*const data: Element[] = [
/!*  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},*!/
];*/

export class ExampleDataSource extends DataSource<any> {

  constructor(private subject: BehaviorSubject<any[]> ,private _sort: MatSort) {
    super ();
  }

  connect (): Observable<any[]> {
    return this.subject.asObservable();
  }

  disconnect():void {}
}

