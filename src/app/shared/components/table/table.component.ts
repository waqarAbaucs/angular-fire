import { Component, Input, OnInit } from '@angular/core';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() value!: any[];
  first = 0;
  @Input() rows = 10;
  @Input() cols:Column[] = [];

  constructor() {}

  ngOnInit() {
  }

  next() {
      this.first = this.first + this.rows;
  }

  prev() {
      this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  pageChange(event:any) {
      this.first = event.first;
      this.rows = event.rows;
  }

  isLastPage(): boolean {
      return this.value ? this.first === this.value.length - this.rows : true;
  }

  isFirstPage(): boolean {
      return this.value ? this.first === 0 : true;
  }

}
