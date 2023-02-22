import { Component } from '@angular/core';
import { Term } from './terms/term/term.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * This is the variable that will be switched on.
   * It is defined as being one of these three strings.
   */
  display: "valid" | "error" | "loading";

  /**
   * This is our list of terms. Term is an interface defined in term.model.ts
   * It could also be written as: Term[]
   */
  termList: Array<Term> = [];

  /**
   * Constructor. Sets display to loading.
   */
  constructor() {
    this.display = "loading"
  }

  /**
   * The OnInit lifecycle hook! Runs after the constructor
   * when the component is initialized.
   */
  ngOnInit(): void {
    this.getData();
  }

  /**
   * This function is simulating us getting data from a server.
   * It has a timeout to make the function take longer.
   * It will randomly sometimes set the display variable to "error"
   * Otherwise it sets the termList variable to a list of terms and sets display to valid
   */
  getData() {
    setTimeout(() => {
      if (Math.random() > .3) {
        this.termList = [
          {
            name: "NgFor",
            category: "Structural Directive",
            definition: "Dynamically generates html components for each item in a list"
          },
          {
            name: "NgIf",
            category: "Structural Directive",
            definition: "Conditionally display html based on a TypeScript expression"
          },
          {
            name: "NgSwitch",
            category: "Structural Directive",
            definition: "Choose one html component to display from a set of possible components based on a TypeScript expression"
          },
        ];
        this.display = "valid"
      }
      else {
        this.display = "error";
      }
    }, 2000);
  }
}
