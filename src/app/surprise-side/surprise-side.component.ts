import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-surprise-side',
  templateUrl: './surprise-side.component.html',
  styleUrls: ['./surprise-side.component.css']
})
export class SurpriseSideComponent implements OnInit {

  constructor(
    private pizzaSvc: PizzaService
  ) { }

  availableSides: string[] = [];

  ngOnInit(): void {
    this.availableSides = this.pizzaSvc.loadSides();
  }

  sides: string[] = [];
  groupedSides: [string, number][] = [];
  commaDelimetedSides = "";

  randomSide = () => {

    // Generate a random number between 0 and 2.
    const r = Math.floor(Math.random() * this.availableSides.length);

    // Update the side property based on that number;
    // const newSide = r === 0
    //   ? "Garlic Bread"
    //   : r === 1
    //     ? "Salad"
    //     : "Soup"
    // ;

    const newSide = this.availableSides[r];
    this.addSide(newSide);

  };

  addSide = (sideToAdd: string) => {
    console.log(sideToAdd);

    // Add it to the array of sides.
    this.sides = [
      ...this.sides
      , sideToAdd
    ];

    this.commaDelimetedSides = this.sides.join(", ")
    
    const m = [
      ...this.sides
    ].sort().reduce(
      (acc, x) => acc.set(
        x
        , (acc.get(x) ?? 0) + 1
      )
      , new Map<string, number>()
    );
    console.log(this.sides, [...m]);

    this.groupedSides = [...m];    
  };

  removeSide = (sideToRemove: string) => {
    console.log(sideToRemove);

    const reversedSides = [...this.sides].reverse();
    const indexOfReversedItemToRemove = reversedSides.findIndex(x => x === sideToRemove);

    // Add it to the array of sides.
    this.sides = reversedSides.filter(
      (x, i) => i !== indexOfReversedItemToRemove
    ).reverse();

    this.commaDelimetedSides = this.sides.join(", ")
    
    const m = this.sides.reduce(
      (acc, x) => acc.set(
        x
        , (acc.get(x) ?? 0) + 1
      )
      , new Map<string, number>()
    );
    console.log(this.sides, [...m]);

    this.groupedSides = [...m];    
  };

}
