import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-1-2',
  templateUrl: './form1.2.component.html',
  styleUrls: ['./form1.2.component.css'],
})
export class Form1_2Component implements OnInit {

  @Input() form!:FormGroup;
  @Input() unitList: any[] = [];

  constructor() {}

  ngOnInit() {}
}
