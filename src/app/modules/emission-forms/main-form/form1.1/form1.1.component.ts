import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-1-1',
  templateUrl: './form1.1.component.html',
  styleUrls: ['./form1.1.component.css'],
})
export class Form1_1Component implements OnInit {

  @Input() form!:FormGroup;
  @Input() unitList: any[] = [];

  constructor() {}

  ngOnInit() {}

}
