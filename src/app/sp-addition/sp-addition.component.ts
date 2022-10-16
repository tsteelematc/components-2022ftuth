import { Component, OnInit } from '@angular/core';
import { StarWarsCharacterService, characterDisplay } from '../star-wars-character.service';

@Component({
  selector: 'sp-addition',
  templateUrl: './sp-addition.component.html',
  styleUrls: ['./sp-addition.component.css']
})
export class SPAdditionComponent implements OnInit {

	// Magic DI, with TS ctor scoped parameters...
  constructor(public starwarsSvc: StarWarsCharacterService) { }

  ngOnInit(): void {
	const ci = this.starwarsSvc.loadCharactersInfo();
  console.log(ci);
 
  this.currentCharacter = ci;
  }
  currentCharacter: characterDisplay[] = [];

  currentMovie = (movie: number[] = []) => this.currentCharacter =
  this.currentCharacter.map(x => ({
    ...x, movie 
  })); 

}
