import { Component, OnInit } from '@angular/core';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-table1-2',
  templateUrl: './table1.2.component.html',
  styleUrls: ['./table1.2.component.css']
})
export class Table1_2Component implements OnInit {

  list!: any[];

  cols:Column[] = [
    { field: 'field1', header: 'Sr#' },
    { field: 'field2', header: 'Transportation Vehicle' },
    { field: 'field3', header: 'Fuel' },
    { field: 'field4', header: 'Unit' },
    { field: 'field5', header: 'Fuel Quantity' },
    { field: 'field6', header: 'GHG Emission Factor' },
    { field: 'field7', header: 'GHG Emission' },
    { field: 'field8', header: 'Attached Image' },
    { field: '', header: 'Action' },
];

  constructor() {}

  ngOnInit() {
  }

}
