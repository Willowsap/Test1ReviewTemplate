import { Component, Input, OnInit } from '@angular/core';
import { Term } from './term/term.model';

@Component({
  selector: 'app-terms[terms]',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  @Input() terms!: Array<Term>;
  selections: boolean[];

  constructor() {
    this.selections = [];
  }

  /**
   * Puts one "false" in the selections array for every term in the terms array
   */
  ngOnInit() {
    this.terms.forEach(() => {this.selections.push(false)});
  }
  
}
