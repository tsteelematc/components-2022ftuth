import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-surprise-side',
  templateUrl: './surprise-side.component.html',
  styleUrls: ['./surprise-side.component.css']
})
export class SurpriseSideComponent implements OnInit {

  constructor(
    private pizzaSVC: PizzaService
  ) { }

  availableSides: string[] = [];

  ngOnInit(): void {
    this.availableSides = this.pizzaSVC.loadSides();
  }

  sides: string[] = [];
  groupedSides: [string, number][] = [];

  randomSide = () => {
    //Generate random number 1-3
    //update side property based on the 
    const r = Math.floor(Math.random() * this.availableSides.length);

   /* const newSide = r === 0 
    ? "Garlic Bread"
    : r === 1 ? "Salad"
    : "Soup"
    ;
    */

    const newSide = this.availableSides[r];

    this.sides = [
      ...this.sides,
      newSide
    ].sort();

    const m = this.sides.reduce(
      (acc, x) => acc.set (
        x
        , (acc.get(x) ?? 0) + 1 
      )
      , new Map<string, number>()
    );
        
    this.groupedSides = [...m];
    

  };
}
