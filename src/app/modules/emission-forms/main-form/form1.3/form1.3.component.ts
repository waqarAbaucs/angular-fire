import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-1-3',
  templateUrl: './form1.3.component.html',
  styleUrls: ['./form1.3.component.css'],
})
export class Form1_3Component implements OnInit {

  @Input() form!:FormGroup;
  @Input() unitList: any[] = [];

  constructor() {}

  ngOnInit() {}
}
