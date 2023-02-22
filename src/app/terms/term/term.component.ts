import { Component, Input } from '@angular/core';
import { Term } from './term.model';

@Component({
  selector: 'app-term[term]',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.css']
})
export class TermComponent {

  @Input() term!: Term;
  selected: boolean = false;
}
