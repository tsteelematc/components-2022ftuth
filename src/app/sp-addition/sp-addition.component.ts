import { Component, OnInit } from '@angular/core';
import { StarWarsCharacterService, characterDisplay } from '../star-wars-character.service';


// import { toRoman } from "typescript-roman-numbers-converter";


// export class SelectValueBindingExample {
//   selected = 'option2';
// }


@Component({
  selector: 'sp-addition',
  templateUrl: './sp-addition.component.html',
  styleUrls: ['./sp-addition.component.css'],
  
})
export class SPAdditionComponent implements OnInit {

	// Magic DI, with TS ctor scoped parameters...
  constructor(public starwarsSvc: StarWarsCharacterService) { }

  ngOnInit(): void {
	const ci = this.starwarsSvc.loadCharactersInfo();
  	console.log(ci);
  	this.availableCharacters = ci;
  }
	availableCharacters: characterDisplay[] = [];


  	currentChar = "";
	/*() => this.availableCharacters =
  	this.availableCharacters.map(x => ({...x}));  */
	currentCharChanged = () => {
		this.moviesForCurrentChar = 
		this.availableCharacters.filter(x => x.name === this.currentChar)[0].movie
			// .map(x => toRoman(x))
			.join(", ")
		;
		// this.moviesForCurrentChar = 
		// (this.availableCharacters.find(x => x.name === this.currentChar)??{movie[]}).movie.join(" ,");
	};
	moviesForCurrentChar = "";
}
