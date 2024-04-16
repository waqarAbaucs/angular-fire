import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-1-4',
  templateUrl: './form1.4.component.html',
  styleUrls: ['./form1.4.component.css'],
})
export class Form1_4Component implements OnInit {

  @Input() form!:FormGroup;
  @Input() unitList: any[] = [];

  constructor() {}

  ngOnInit() {}
}
