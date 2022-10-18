import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surprise-side',
  templateUrl: './surprise-side.component.html',
  styleUrls: ['./surprise-side.component.css']
})
export class SurpriseSideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  side = "None";

  randomSide = () => {

    // Generate a random number between 0 and 2.
    const r = Math.floor(Math.random() * 3);

    // Update the side property based on that number;
    this.side = r === 0
      ? "Garlic Bread"
      : r === 1
        ? "Salad"
        : "Soup"
  };
}
