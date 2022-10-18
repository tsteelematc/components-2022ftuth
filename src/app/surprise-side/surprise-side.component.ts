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
  sides: string [] = [];
  groupedSides: [string, number] [] = [];

  randomSide = () => {

    // generate a random number between 1 and 3 
    const r = Math.floor(Math.random() * this.availableSides.length);

    // update the side property based on that number 
   // const newSide = r === 0 ? "Garlic Bread" : r === 1 ? "Salad" : "Soup";

   const newSide = this.availableSides[r];

  

    // add it to the array of sides.
    this.sides = [
    ...this.sides, newSide
    ];

    const m = this.sides.reduce (
        (acc, x) => acc.set (
            x, 
            (acc.get (x) ?? 0)   + 1
    ), new Map <string, number>()
    );
    console.log (this.sides, m);

    this.groupedSides = [...m];

    };

}
